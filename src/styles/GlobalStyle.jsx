import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: yellow;
    --color-secondary: red;
    height: 100%;
}
body {
    height: 200%;
    background: #ccc;
}

`;

export default GlobalStyle;
