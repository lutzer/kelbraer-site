import styled from "styled-components"
import {motion} from "framer-motion"

function Intro() {

  const Container = styled.header`
    background-color: #FFF5DC;
    padding: 150px var(--contentPadding);
    text-align: center;
    overflow: hidden;
  `

  const Cloud = styled(motion.div)`
    width: 200px;
    height: 30px;
    background-color: var(--red);
  `


  return (
    <Container>
        <h1>Welcome to the website of Kelbraer people</h1>
        <Cloud animate={{x: "120vw"}} transition={{ duration: 10 }}></Cloud>
    </Container>
  );
}

export default Intro;
