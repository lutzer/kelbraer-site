import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
// import SketchPad from './components/SketchPad';
import Message from "./components/Message"
import Intro from "./components/Intro"
import Flower from "./components/Flower"

const MessageContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 900px;
  margin: auto;
  padding-left: var(--contentPadding);
  padding-right: var(--contentPadding);

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
