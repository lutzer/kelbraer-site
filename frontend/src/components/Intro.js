import styled from "styled-components"
import {motion} from "framer-motion"
import Success from "./Success.js";

function Intro() {

  const Container = styled.header`
    background-color: #FFF5DC;
    padding: 150px var(--contentPadding);
    text-align: center;
    overflow: hidden;
  `

  const Cloud = styled(motion.div)`
    height: 200px;
    background: url("./cloud.png") no-repeat;
    margin-top: 0px;
  `

  return (
    <Container>
      <svg viewBox="0 0 500 100">
        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent"/>
        <text width="500" text-anchor="middle" font-weight="bold">
          <textPath xlinkHref="#curve" startOffset="50%">
            Kelbraer website
          </textPath>
        </text>
      </svg>
      <Cloud animate={{x: "120vw"}} transition={{ duration: 20, repeat: "Infinity" }}></Cloud>
      <Success />
    </Container>
  );
}

export default Intro;
