import { createGlobalStyle } from "styled-components"; /* npm install --save styled-components */ 

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    color: white;
    background-image: linear-gradient(to bottom, #33383D , #1C1D20);
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

export default GlobalStyle;
