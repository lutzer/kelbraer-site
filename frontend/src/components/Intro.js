import styled from "styled-components"
import {motion} from "framer-motion"
import Flower from "./Flower"

function Intro() {

  const Container = styled.header`
    background-color: 'transparent';
    padding: 150px var(--contentPadding);
    text-align: center;
    overflow: hidden;
  `

  const FlowerContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 1300px;
    margin: auto;
  `

  const Subtitle = styled.div`
    line-height: 1.4;
    font-size: var(--s2);
    max-width: 40ch;
    margin: auto;
  `

  const variants = {
    visible: i => ({
      y: 150 - Math.random() * 300,
      x: 150 - Math.random() * 300,
      transition: {
        delay: i * 1,
        duration: 7,
        repeat: "Infinity",
        repeatType: "reverse"
      },
    }),
  }


  return (
    <Container>
      <FlowerContainer>
        <motion.div custom={0}
          animate="visible"
          variants={variants}>
          <Flower fill="var(--red)"></Flower>
        </motion.div>
        <motion.div custom={1}
          animate="visible"
          variants={variants}>
          <Flower></Flower>
        </motion.div>
        <motion.div custom={2}
          animate="visible"
          variants={variants}><Flower fill="var(--orange)"></Flower></motion.div>
          <motion.div custom={3}
          animate="visible"
          variants={variants}><Flower></Flower></motion.div>
      </FlowerContainer>
      <svg viewBox="0 0 500 100">
        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent"/>
        <text width="500" text-anchor="middle" font-weight="bold" font-size="30px">
          <textPath xlinkHref="#curve" startOffset="50%">
            Kelbraer Str. 12
          </textPath>
        </text>
      </svg>
      <Subtitle>Welcome to our website! You can send us a message using the form below. Your message will be printed with a nice black and white printer in our house.</Subtitle>
    </Container>
  );
}

export default Intro;
