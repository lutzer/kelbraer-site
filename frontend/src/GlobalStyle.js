import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --s3: 47px;
        --s2: 36px;
        --s1: 27px;
        --s0: 20px;

        --contentPadding: 30px;
    }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: var(--s0);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow: scroll;
  }

  h1 {
    font-size: var(--s3);
  }
`;


export default GlobalStyle;