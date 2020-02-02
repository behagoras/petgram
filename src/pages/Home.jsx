import React from 'react';

import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCardsWithQuery from '../apollo/ListOfPhotoCardsWithQuery';
import Layout from '../components/Layout';

const Home = ({ categoryId }) => {

  return (
    <Layout
      title="Tu app de fotos de mascotas"
      subtitle="Con petgram puedes encontrar las mejores fotos de animales domésticos"
    >
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </Layout>
  );
};

export default Home;
