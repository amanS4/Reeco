import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 * {
    font-size: 10px;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;           
    print-color-adjust: exact; 
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FBFBFB;
    font-family: Inter, sans-serif;
    font-size: 1.4rem;
  }

  main {
    display: block;
  }

  a {
    background-color: transparent;
  }

  .container {
    max-width: 1440px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .max-container {
    max-width: 160rem;
    margin-inline: auto;
    padding-inline: 14.5rem;
  }

`;

export default GlobalStyles;
