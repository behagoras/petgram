import React from 'react';
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

export default ListOfPhotoCardsComponent;
