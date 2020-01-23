import React from 'react';

import GlobalStyles from './styles/globalStyles';

import Home from './pages/Home';
import Logo from './components/Logo';

function App() {
  return (

    <div className="App">
      <GlobalStyles />
      <Logo />
      <Home />
    </div>
  );
}

export default App;
