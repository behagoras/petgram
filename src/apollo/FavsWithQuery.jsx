import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Spinner from '../components/Spinner';

import ListOfFavs from '../components/ListOfFavs';

const GET_FAVS = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Spinner />;
  if (error) return <p>Error!</p>;
  const { favs } = data;
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <ListOfFavs
      favs={favs}
    />
  ) ;
};

const FavsWithQuery = () => {
  return (
    <Query
      query={GET_FAVS}
      fetchPolicy="network-only"
    >
      {renderProp}
    </Query>
  );
};

export default FavsWithQuery;
