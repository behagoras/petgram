import React from 'react';
import PhotoCardWithQuery from '../apollo/PhotoCardWithQuery';

const Detail = ({ detailId }) => {
  return <PhotoCardWithQuery id={detailId} />;
};

export default Detail;
