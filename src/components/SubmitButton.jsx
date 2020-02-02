import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const SubmitButton = ({ children, onClick, className, disabled }) => {
  return <Button className={className} disabled={disabled} onClick={onClick}>{children}</Button>;
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,

};

export default SubmitButton;
