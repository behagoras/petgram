import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { fadeIn } from '../styles/animation';
// import useLocalStorage from '../hooks/useLocalStorage';
import useNearScreen from '../hooks/useNearScreen';

import ToggleLikeMutation from '../apollo/ToggleLikeMutation';

import FavButton from './FavButton';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const Article = styled.article`
  min-height:200px;
`;

const ImgWrapper = styled.figure`
  border-radius:10px;
  display: block;
  height:0;
  overflow:hidden;
  padding:56.25% 0 0 0;
  position:relative;
  width: 100%;
  & img {
    ${fadeIn()};
    box-shadow: 0 10px 14px rgba(0,0,0,0.2);
    height: 100%;
    width:100%;
    object-fit:cover;
    position:absolute;
    top:0;
  }
`;

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  // const key = `like-${id}`;

  const [show, $element] = useNearScreen();
  // const [liked, setLiked] = useLocalStorage(key, false);

  return (
    <Article
      ref={$element}
    >
      {
        show &&
        (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <img alt={src} src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    // !liked &&
                    toggleLike({ variables: {
                      input: { id },
                    } });

                    // setLiked(!liked);
                  };
                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />;
                }
              }
            </ToggleLikeMutation>

          </>
        )
      }
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, componentName)=>{

    const propValue = props[propName];
    if(propValue===undefined){
      return new Error(`${propName} value must be defined`);
    }

    if(propValue<0){
      return new Error(`${propName} value must be greater or equal than 0`);
    }
  },
};

export default PhotoCard;
