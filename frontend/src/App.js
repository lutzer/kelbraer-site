import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
// import SketchPad from './components/SketchPad';
import Message from "./components/Message"
import Intro from "./components/Intro"
import Flower from "./components/Flower"
import { ShaderBackground } from './components/ShaderBackground';

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

const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ForegroundDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <div className="App">
      <BackgroundDiv>
        <ShaderBackground/>
      </BackgroundDiv>
      <ForegroundDiv> 
        <GlobalStyle></GlobalStyle>
        <Intro></Intro>
        <MessageContainer>
          <Message></Message>
        </MessageContainer>
      </ForegroundDiv>
    </div>
  );
}

export default App;
