import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import PhotoCard from '../components/PhotoCard';
import Spinner from '../components/Spinner';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  const photo = data ? data.photo : {};
  console.log(photo);
  return <PhotoCard {...photo} />;
};

const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  );
};

export default PhotoCardWithQuery;
