import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Img = styled.img`
  max-width:100%;
  margin:0 auto;
`;
function NotFound() {
  return (
    <Layout title="Esta página no existe 🙀">
      <Img src="https://media.giphy.com/media/mD4fDllkwM6kxKzhV4/giphy.gif" alt="Not Found" />
    </Layout>
  );
}

export default NotFound;
