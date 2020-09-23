import React, { Fragment } from 'react';
import GlobalStyle from './theme/globalStyles';
import Routes from './routes'
import Navigation from './components/Navigation'
import TsParticles from './components/TsParticles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <TsParticles />
      <div className="aplication">
          <Navigation />
          <Routes/>
      </div>
    </Fragment>
  );
}

export default App;
