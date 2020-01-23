import React from 'react';
import { Router } from '@reach/router';

import GlobalStyles from './styles/globalStyles';

import Logo from './components/Logo';
import NavBar from './components/NavBar';

//Pages
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (

    <div className="App">
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <NavBar />
    </div>
  );
}

export default App;
