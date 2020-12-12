import { createGlobalStyle } from 'styled-components';

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

export default GlobalStyle;