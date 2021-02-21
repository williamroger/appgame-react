import React from 'react';
import GlobalStyle from '../src/styles/global-style';

import Dashboard from '../src/pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
