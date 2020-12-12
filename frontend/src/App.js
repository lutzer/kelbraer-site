import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import SketchPad from './components/SketchPad';
import Message from "./components/Message"
import Intro from "./components/Intro"

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
      <SketchPad />
    </div>
  );
}

export default App;