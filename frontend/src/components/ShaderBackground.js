import React from  'react';
import ShadertoyReact from 'shadertoy-react';
import glsl from 'glslify';

function rgbToVec3(r,g,b) { return [ r / 255, g / 255, b / 255 ] };

const ShaderBackground = () => {
  
  const uniforms = {
    ratio : {type: '1f', value: 0.5 }, // float
    primary_color : { type: '3fv', value: rgbToVec3(37, 34, 2) },
    secondary_color : { type: '3fv', value: rgbToVec3(244,168,17) },
    background_color : {type: '3fv', value: rgbToVec3(255,245,220) }
  };

  const fs = glsl`
    precision highp float;

    vec3 random3(vec3 c) {
      float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
      vec3 r;
      r.z = fract(512.0*j);
      j *= .125;
      r.x = fract(512.0*j);
      j *= .125;
      r.y = fract(512.0*j);
      return r-0.5;
    }
    
    /* skew constants for 3d simplex functions */
    const float F3 =  0.3333333;
    const float G3 =  0.1666667;
    
    /* 3d simplex noise */
    float simplex3d(vec3 p) {
       /* 1. find current tetrahedron T and it's four vertices */
       /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */
       /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/
       
       /* calculate s and x */
       vec3 s = floor(p + dot(p, vec3(F3)));
       vec3 x = p - s + dot(s, vec3(G3));
       
       /* calculate i1 and i2 */
       vec3 e = step(vec3(0.0), x - x.yzx);
       vec3 i1 = e*(1.0 - e.zxy);
       vec3 i2 = 1.0 - e.zxy*(1.0 - e);
         
       /* x1, x2, x3 */
       vec3 x1 = x - i1 + G3;
       vec3 x2 = x - i2 + 2.0*G3;
       vec3 x3 = x - 1.0 + 3.0*G3;
       
       /* 2. find four surflets and store them in d */
       vec4 w, d;
       
       /* calculate surflet weights */
       w.x = dot(x, x);
       w.y = dot(x1, x1);
       w.z = dot(x2, x2);
       w.w = dot(x3, x3);
       
       /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */
       w = max(0.6 - w, 0.0);
       
       /* calculate surflet components */
       d.x = dot(random3(s), x);
       d.y = dot(random3(s + i1), x1);
       d.z = dot(random3(s + i2), x2);
       d.w = dot(random3(s + 1.0), x3);
       
       /* multiply d by w^4 */
       w *= w;
       w *= w;
       d *= w;
       
       /* 3. return the sum of the four surflets */
       return dot(d, vec4(52.0));
    }

    #define freq 0.2

    void main () {

      vec2 vUv = gl_FragCoord.xy/iResolution.xy;

      float time = iTime;

      float light = simplex3d(vec3(time * freq, vUv.x * 3. - time * freq, vUv.y * time * 0.001)) * 0.08 + vUv.y * 0.92;
      vec3 bg = mix(background_color, secondary_color, vUv.y);

      // vec3 color = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0.0, 2.0, 4.0));
      gl_FragColor = vec4(mix( bg, primary_color, step(ratio, light)), 1.0);
    }
  `;

  
  return(
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      backgroundColor: '#FFF5DC'}}>
      <ShadertoyReact
        fs={fs}
        uniforms={uniforms}
        style={{ width: '100%', height: 500}}
      />
    </div>
  );
}

export { ShaderBackground }