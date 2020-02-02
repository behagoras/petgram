import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';

import { Context } from './Context';

//Styles
import GlobalStyles from './styles/globalStyles';

//Template
import Logo from './components/Logo';
import NavBar from './components/NavBar';

//Pages
import Home from './pages/Home';
import Spinner from './components/Spinner';

const Favs = React.lazy(() => import('./pages/Favs'));
const Detail = React.lazy(() => import('./pages/Detail'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));
const User = React.lazy(() => import('./pages/User'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
}

export default App;
