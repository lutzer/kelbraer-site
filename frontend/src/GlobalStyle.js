import { createGlobalStyle } from 'styled-components';
import RubikRegular from './fonts/Rubik-Regular.ttf';
import RubikBold from './fonts/Rubik-Bold.ttf';
import RubikBlack from './fonts/Rubik-Black.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: url(${RubikRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    src: url(${RubikBold}) format('truetype');
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 900;
    src: url(${RubikBlack}) format('truetype');
  }


  :root {
        --s3: 47px;
        --s2: 36px;
        --s1: 27px;
        --s0: 20px;

        --contentPadding: 30px;

        --black: #25221D;
        --red: #F05624;
        --orange: #F4A811;
        --beige: #FFF5DC;
        --white: #fff;
        
        --bg: var(--beige);
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: var(--s0);
    font-family: Rubik, sans-Serif;
    overflow: scroll;
    background-color: var(--bg);
    line-height: 1.5;
  }

  h1 {
    font-size: var(--s3);
  }
`;


export default GlobalStyle;