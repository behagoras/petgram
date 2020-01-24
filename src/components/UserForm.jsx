import React from 'react';
import styled from 'styled-components';

import useInputValue from '../hooks/useInputValue';

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
`;

const Button = styled.button`
  background:#8d00ff;
  border-radius:3px;
  color: #fff;
  height:32px;
  display: block;
  width: 100%;
  text-align:center;
`;

const Title = styled.h2`
  font-size:16px;
  font-weight:500;
  padding:8px;
`;

function UserForm({ onSubmit, title }) {
  const email = useInputValue('');
  const password = useInputValue('');
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type="email" placeholder="Email" {...email} />
        <Input type="password" placeholder="Password" {...password} />
        <Button type="submit">
          {title}
        </Button>
      </Form>
    </>
  );
}

export default UserForm;
