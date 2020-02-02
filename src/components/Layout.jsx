import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom:16px;
`;

const Title = styled.h1`
  font-size:24px;
  font-weight:600;
  color:#222;
  padding-bottom:8px;
`;

const Subtitle = styled.h2`
  font-size:16px;
  font-weight:400;
  color:#333;
  padding-bottom:24px;
`;

function Layout({ children, title, subtitle }) {
  return (
    <>
      <Helmet>
        {title && (
          <title>
            {title}
            {' '}
            | Petgram 🐶
          </title>
        )}
        {subtitle && <meta name="description" content={subtitle} /> }
      </Helmet>
      <Container>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Container>
    </>
  );
}

export default Layout;
