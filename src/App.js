import React from 'react';

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
          <PhotoCardWithQuery id={detailId} /> :
          <Home />
      }
    </div>
  );
}

export default App;
