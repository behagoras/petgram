import React from 'react';

// import ListOfCategories from '../Components/Categories/ListOfCategories.jsx';
import ListOfPhotoCardsWithQuery from '../apollo/ListOfPhotoCardsWithQuery';

const Home = () => {

  return (
    <>
      {/* <ListOfCategories /> */}
      <ListOfPhotoCardsWithQuery
      // categoryId={2}
      />
    </>
  );
};

export default Home;
