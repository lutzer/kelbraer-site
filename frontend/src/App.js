import styled from "styled-components"
import Message from "./components/Message"
import Intro from "./components/Intro"
import GlobalStyle from "./GlobalStyle"

const MessageContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 900px;
  margin: auto;

  > div {
    grid-column: 1 / -1;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Intro></Intro>
      <MessageContainer>
        <Message></Message>
      </MessageContainer>
    </div>
  );
}

export default App;
