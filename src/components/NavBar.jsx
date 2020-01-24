import React from 'react';
import { Link as LinkRouter } from '@reach/router';
import styled from 'styled-components';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { fadeIn } from '../styles/animation';

const Nav = styled.nav`
  position:fixed;
  display:flex;
  height: 50px;
  width: 100%;
  max-width:500px;
  justify-content: space-around;
  align-items:center;
  margin:0 auto;
  bottom: 0;
  left: 0;
  right:0;
  background:#fcfcfc;
  border-top: 1px solid #e0e0e0;
  z-index: 10;
`;

const Link = styled(LinkRouter)`
  align-items:center;
  color:#888;
  display: inline-flex;
  height: 100%;
  justify-content:center;
  text-decoration:none;
  width: 100%;

  &[aria-current]{
    color: #000;

    &:after {
      ${fadeIn({ time: '0.5s' })};
      content:"·";
      position: absolute;
      bottom: 0;
      font-size:34px;
      line-height:20px;
    }
  }
`;

const SIZE = '32px';

const NavBar = () => {
  return (
    <Nav>
      <Link to="/"><MdHome size={SIZE} /></Link>
      <Link to="/favs"><MdFavoriteBorder size={SIZE} /></Link>
      <Link to="/user"><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  );
};

export default NavBar;
