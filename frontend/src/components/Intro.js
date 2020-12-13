import styled from "styled-components"
import {motion} from "framer-motion"
import Success from "./Success.js";
import Flower from "./Flower"

function Intro() {

  const Container = styled.header`
    background-color: 'transparent';
    padding: 150px var(--contentPadding);
    text-align: center;
    overflow: hidden;
  `

  const Cloud = styled(motion.div)`
    height: 200px;
    background: url("./cloud.png") no-repeat;
    margin-top: 0px;
  `

  const Cloud2 = styled(motion.div)`
    height: 200px;
    background: url("./cloud2.png") no-repeat;
    margin-top: 200px;
    position: relative;
    padding:0;
    z-index: 9999;
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
      rotate: 360,
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
          <Flower fill="var(--red)"><img src="./lutz.jpg" alt="Lutz"/></Flower>
        </motion.div>
        <motion.div custom={1}
          animate="visible"
          variants={variants}>
          <Flower fill="var(--white)"><img src="./nitsa.jpg" alt="Nitsa"/></Flower>
        </motion.div>
        <motion.div custom={2}
          animate="visible"
          variants={variants}><Flower fill="var(--orange)"><img src="./noam.jpg" alt="Noam"/></Flower></motion.div>
          <motion.div custom={3}
          animate="visible"
          variants={variants}><Flower  fill="var(--white)"><img src="./tukka.jpg" alt="Tukka"/></Flower></motion.div>
      </FlowerContainer>
      {/* <Cloud2 animate={{x: "120vw"}} transition={{ duration: 10, repeat: "Infinity" }}></Cloud2> */}
      <svg viewBox="0 0 500 100">
        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent"/>
        <text width="500" text-anchor="middle" font-weight="bold" font-size="30px">
          <textPath xlinkHref="#curve" startOffset="50%">
            Kelbraer Str. 12
          </textPath>
        </text>
      </svg>
      {/* <Cloud animate={{x: "120vw"}} transition={{ duration: 20, repeat: "Infinity" }}></Cloud> */}
      <Subtitle>Welcome to our website! You can send us a message using the form below. Your message will be printed with a nice black and white printer in our house.</Subtitle>
      <Success />
    </Container>
  );
}

export default Intro;
