import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --s1: 26.6px;
        --s0: 20px;
    }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: var(--s0);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const Wrapper = styled.section`
  background: red;
  height: 200px;
  width: 500px;
`;

export default GlobalStyle;