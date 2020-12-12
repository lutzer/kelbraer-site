import './App.css';
import styled from "styled-components"
import { useRef } from "react"
import Message from "./components/Message"

function App() {
  return (
    <div className="App">
    <header>
      <h1>Welcome to the website of Kelbraer people</h1>
    </header>
    <main>
      <Message></Message>
    </main>
    </div>
  );
}

export default App;
