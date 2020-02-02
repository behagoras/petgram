import React from 'react';
import PhotoCardWithQuery from '../apollo/PhotoCardWithQuery';
import Layout from '../components/Layout';

const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};

export default Detail;
