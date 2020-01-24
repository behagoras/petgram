import React from 'react';
import { Router } from '@reach/router';

import Context from './Context';

//Styles
import GlobalStyles from './styles/globalStyles';

//Template
import Logo from './components/Logo';
import NavBar from './components/NavBar';

//Pages
import Home from './pages/Home';
import Favs from './pages/Favs';
import Detail from './pages/Detail';
import NotRegisteredUser from './pages/NotRegisteredUser';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) => (isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          ))
        }
      </Context.Consumer>

      <NavBar />
    </div>
  );
}

export default App;
