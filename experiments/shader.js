const canvasSketch = require('canvas-sketch');
const createShader = require('canvas-sketch-util/shader');
const glsl = require('glslify');

// Setup our sketch
const settings = {
  context: 'webgl',
  animate: true
};

function rgbToVec3(r,g,b) { return [ r / 255, g / 255, b / 255 ] };

// Your glsl code
const frag = glsl`
  precision highp float;

  uniform vec3 primary_color;
  uniform vec3 secondary_color;
  uniform vec3 background_color;
  uniform float time;
  varying vec2 vUv;

  #pragma glslify: noise = require('glsl-noise/simplex/3d');

  void main () {

    float light = noise(vec3(time * 0.2, vUv.x * .9, 0.0)) * (1.0-sin(vUv.y) * 0.05) + vUv.y * 1.5;

    // vec3 color = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0.0, 2.0, 4.0));
    gl_FragColor = vec4(mix(background_color, primary_color, step(0.5, light)), 1.0);
  }
`;

// Your sketch, which simply returns the shader
const sketch = ({ gl }) => {
  // Create the shader and return it
  return createShader({
    // Pass along WebGL context
    gl,
    // Specify fragment and/or vertex shader strings
    frag,
    // Specify additional uniforms to pass down to the shaders
    uniforms: {
      // Expose props from canvas-sketch
      time: ({ time }) => time,
      primary_color: rgbToVec3(37,34,29),
      secondary_color: rgbToVec3(244,168,17),
      background_color: rgbToVec3(255,245,220)
    } 
  });
};

canvasSketch(sketch, settings);