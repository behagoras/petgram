import React from 'react';
import styled from 'styled-components';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

import PropTypes from 'prop-types';

const Button = styled.button`
  display:flex;
  align-items:center;
  padding-top: 8px;
  & svg {
    margin-right:4px;
  }
`;

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" />
      {' '}
      {likes}
      {' '}
likes!
    </Button>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FavButton;
