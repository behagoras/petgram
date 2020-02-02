/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';

const ListOfPhotoCardsComponent = (props = {}) => {
  const { data = {} } = props;
  const { photos = [] } = data;
  return (
    <ul>
      {photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  );
};

ListOfPhotoCardsComponent.propTypes = {
  data: PropTypes.object,
};

export default ListOfPhotoCardsComponent;
