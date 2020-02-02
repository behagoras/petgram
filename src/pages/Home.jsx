import React from 'react';

import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCardsWithQuery from '../apollo/ListOfPhotoCardsWithQuery';
import Layout from '../components/Layout';

const HomePage = ({ categoryId }) => {

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

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});

export default Home;
