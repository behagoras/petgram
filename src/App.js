import React from 'react';
import { Router } from '@reach/router';

import GlobalStyles from './styles/globalStyles';

import Home from './pages/Home';
import Logo from './components/Logo';
import PhotoCardWithQuery from './apollo/PhotoCardWithQuery';

function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (

    <div className="App">
      <GlobalStyles />
      <Logo />
      {
        detailId ?
          <PhotoCardWithQuery id={detailId} /> : (
            <Router>
              <Home path="/" />
              <Home path="/pet/:id" />
            </Router>
          )
      }
    </div>
  );
}

export default App;
