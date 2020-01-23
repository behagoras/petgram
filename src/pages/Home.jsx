import React from 'react';

import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCardsWithQuery from '../apollo/ListOfPhotoCardsWithQuery';

const Home = ({ id }) => {

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery
        categoryId={id}
      />
    </>
  );
};

export default Home;
