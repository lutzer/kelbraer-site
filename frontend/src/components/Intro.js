import styled from "styled-components"

function Intro() {

  const Container = styled.header`
    height: 400px;
    background-color: #FFF5DC;
    padding: 40px;
    text-align: center;
  `

  return (
    <Container>
        <h1>Welcome to the website of Kelbraer people</h1>
    </Container>
  );
}

export default Intro;
