import React from 'react';

// import ListOfCategories from '../Components/Categories/ListOfCategories.jsx';
import Category from '../components/Category';
import ListOfPhotoCardsWithQuery from '../apollo/ListOfPhotoCardsWithQuery';

const Home = () => {

  return (
    <>
      {/* <ListOfCategories /> */}
      <Category />
      <ListOfPhotoCardsWithQuery
      // categoryId={2}
      />
    </>
  );
};

export default Home;
