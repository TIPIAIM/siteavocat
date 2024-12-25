import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica55Roman';
    src: url('./assets/fonts/Helvetica55Roman.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Helvetica55Roman', Arial,;
  }
`;

export default GlobalStyle;
