import React from 'react';
import FavsWithQuery from '../apollo/FavsWithQuery';
import Layout from '../components/Layout';

const Favs = () => {
  return (
    <Layout title="Tus Favoritos" subtitle="Aquí puedes encontrar tus fotos favoritas">
      <FavsWithQuery />
    </Layout>
  );
};

export default Favs;
