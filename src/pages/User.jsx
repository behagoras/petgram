import React, { useContext } from 'react';
import { Context } from '../Context';
import SubmitButton from '../components/SubmitButton';
import Layout from '../components/Layout';

const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Layout title="Usuario registrado">
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </Layout>
  );
};

export default User;
