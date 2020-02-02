import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
const Button = styled.button`
  background:#8d00ff;
  border-radius:3px;
  color: #fff;
  height:32px;
  display: block;
  width: 100%;
  text-align:center;
  &[disabled]{
    opacity:0.3;
  }
`;

const SubmitButton = ({ children, onClick, className }) => {
  return <Button className={className} onClick={onClick}>{children}</Button>;
};

export default SubmitButton;
