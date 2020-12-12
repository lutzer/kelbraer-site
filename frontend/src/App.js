import styled from "styled-components"
import { useRef } from "react"
import Message from "./components/Message"
import Intro from "./components/Intro"

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <main>
        <Message></Message>
      </main>
    </div>
  );
}

export default App;
