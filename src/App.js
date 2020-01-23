import React from 'react';
import PhotoCard from './components/PhotoCard';
import ListOfPhotoCardsWithQuery from './apollo/ListOfPhotoCardsWithQuery';

function App() {
  return (
    <div className="App">
      <ListOfPhotoCardsWithQuery />
    </div>
  );
}

export default App;
