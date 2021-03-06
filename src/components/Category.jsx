import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import PropTypes from 'prop-types';

const Link = styled(LinkRouter)`
  display:flex;
  flex-direction:column;
  text-align:center;
  text-decoration:none;
  width: 75px;
`;

const Image = styled.img`
  border:1px solid #ddd;
  box-shadow:0px 10px 14px rgba(0,0,0,0.2);
  border-radius:50%;
  height: auto;
  overflow:hidden;
  object-fit:cover;
  height: 75px;
  width: 75px;
`;

const DEFAULT_IMAGE = 'https://www.housesitmatch.com/wp-content/themes/petsitter/images/job-placeholder.gif';

const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} />
      {emoji}
    </Link>
  );
};

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string,
};

export default Category;
