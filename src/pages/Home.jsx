import React from 'react';

import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCardsWithQuery from '../apollo/ListOfPhotoCardsWithQuery';

const Home = () => {

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery
      // categoryId={2}
      />
    </>
  );
};

export default Home;
