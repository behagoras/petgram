import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';

import { Context } from './Context';

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
import NotFound from './pages/NotFound';

function App() {
  const { isAuth } = useContext(Context);
  return (
    <div className="App">
      <GlobalStyles />
      <Logo />

      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        { !isAuth && <NotRegisteredUser path="/login" noThrow />}
        { !isAuth && <Redirect from="/favs" to="/login" noThrow />}
        { !isAuth && <Redirect from="/user" to="/login" noThrow />}
        { isAuth && <Redirect from="/login" to="/" noThrow />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </div>
  );
}

export default App;
