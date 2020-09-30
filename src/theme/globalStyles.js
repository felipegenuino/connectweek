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

    ::-webkit-scrollbar-track { background: #292D2F; }
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




//Modal style
.modal-title{
  margin-bottom: 0;
  line-height: 1.2;
  font-size: 24px;
}
  .modal-content{
    background-color: #34393B;
    border: 1px solid #24DC86;
    color: #fff;
    border-radius: 0;
    padding: 50px 65px;
  }
  .modal-header{
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom: none;
  }

  .modal-header .close {
    padding: 0;
    margin: 0;
    position: absolute;
    right: 30px;
    top: 30px;
    width: 20px;
    height: 20px;
    opacity: 1;
    background: #24DC86;
    line-height: 0;
    font-weight: 400;
}

  .modal-header-top{ display: flex; padding: 1rem 1rem 1rem 1rem;}
  .modal-header-top__data,
  .modal-header-top__hora{
    height: 37px;
    font-size: 16px;
    border: 1px solid #24DC86;
    width: 60px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 10px;
  }
  .modal-header-top__data{ color: #fff; background: #2DAD71}
  .modal-header-top__hora{ color: #24DC86;}

  .modal-separador{
    border-color: #24DC86;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .modal-body h5{ font-size: 16px; font-weight: 700;}

  .modal-lista-palestrantes {
    max-height: 200px;
    overflow-y: auto;
}

  .modal-lista-palestrantes ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
  .modal-lista-palestrantes ul li{ margin-bottom: 10px;}
  .palestrante-mini-card{ display: flex;}
  .palestrante-mini-card-d{}
  .palestrante-mini-card-d img {  width: 95px;}
  .palestrante-mini-card-e{ padding-left: 20px;}
  .palestrante-mini-card-e h5{ font-size: 24px; font-weight: 700; }
  .palestrante-mini-card-e p{font-size: 13px;}
  .palestrante-mini-card-image{}
  .palestrante-mini-card-content{}

  @media (min-width: 992px){
    .modal-lg, .modal-xl {
      max-width: 970px;
    }
  }

 `;

export default GlobalStyle;
