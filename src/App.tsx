import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../src/styles/global-style';

import Routes from './router';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
