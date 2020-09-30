// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
      margin: 0;

      font-family: Lato, sans-serif;
      font-weight: 400;

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

    .aplication{
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    .header-page {
      min-height: 250px;
      text-align: center;
      align-items: center;
      align-content: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      color: #fff;
      }
    .header-page h2 {    font-size: 48px;  font-weight: 600;}
    .header-page h3 {font-size: 24px;  font-weight: 300;  letter-spacing: 0.06rem;}

    main{
      margin: 0;
      display: flex;
      flex-direction: column;
      }


  @media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {  max-width: 1280px; margin: 0 auto; }
  }

 `;

export default GlobalStyle;
