import React from 'react';
import PropTypes from 'prop-types';
import PhotoCardWithQuery from '../apollo/PhotoCardWithQuery';
import Layout from '../components/Layout';

const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};

Detail.propTypes = {
  detailId: PropTypes.string,
};

export default Detail;
