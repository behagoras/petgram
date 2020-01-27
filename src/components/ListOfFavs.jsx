import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

const Link = styled(LinkRouter)`
  border-radius:8px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  display:inline-block;
  margin: 1%;
  overflow: hidden;
  position:relative;
  width: 31.33%;
  &:after {
    content:'';
    display: block;
    padding-bottom:100%;
  }
`;

const Grid = styled.div`
  padding-top:32px;
`;

const Img = styled.img`
  object-fit:cover;
  height: 100%;
  width: 100%;
  position:absolute;
`;

function ListOfFavs({ favs }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <Grid>
      {
        favs.map((fav) => {
          return (
            <Link key={fav.id} to={`/detail/${fav.id}`}>
              <Img src={fav.src} />
            </Link>
          );
        })
      }
    </Grid>
  );
}

export default ListOfFavs;
