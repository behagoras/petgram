/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useInputValue from '../hooks/useInputValue';
import SubmitButton from './SubmitButton';

const Form = styled.form`
  padding:16px 0;
`;
const Input = styled.input`
  border:1px solid #ccc;
  border-radius:3px;
  margin-bottom:8px;
  padding:8px 4px;
  display: block;
  width: 100%;
  &[disabled]{
    opacity:0.3;
  }
`;

const Title = styled.h2`
  font-size:16px;
  font-weight:500;
  padding:8px;
`;

const Error = styled.span`
  font-size:14px;
  color:red;
  
`;

function UserForm({ error, disabled, onSubmit, title }) {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} type="email" placeholder="Email" {...email} />
        <Input disabled={disabled} type="password" placeholder="Password" {...password} />
        <SubmitButton disabled={disabled} type="submit">
          {title}
        </SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
}

UserForm.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  title: PropTypes.string,
};

export default UserForm;
