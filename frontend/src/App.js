import './App.css';
import styled from "styled-components"
import GlobalStyle from './GlobalStyle';
import SketchPad from "./components/SketchPad";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <header>
        <h1>Welcome to the website of Kelbraer people</h1>
      </header>
      <main><h2>Send a message to us</h2>

        <textarea></textarea>
        <button>Send message</button>
      </main>
      <SketchPad />
    </div>
  );
}

export default App;
