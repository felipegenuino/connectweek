// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

    body {
      margin: 0;
      font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    ::-webkit-scrollbar-track { background: rgb(52, 57, 59); }
    ::-webkit-scrollbar-thumb { background: rgb(136, 136, 136); }
    ::-webkit-scrollbar { width: 20px; }


    :root {
      --bg-content: transparent;
    }

    .aplication {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 970px;
      margin: auto
  }

 `;
 
export default GlobalStyle;