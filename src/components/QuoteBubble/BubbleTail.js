import styled, { keyframes } from 'styled-components';

import media from '../../styles/media';
import BubbleTailArtwork from './BubbleTailArtwork';

const fadeInAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const tailAnimation = keyframes`
  0% { transform: translateY(-20px) rotate(15deg) scaleY(0.8) }
  100% { transform: translateX(0) rotate(0) scaleY(1)}
`;

const BubbleTail = styled(BubbleTailArtwork)`
  position: absolute;
  bottom: -3.2rem;
  left: 10%;
  transform: translateY(-20px);
  animation: ${tailAnimation} 400ms cubic-bezier(0.68, -0.55, 0.265, 1.6) forwards;
  transform-origin: 50% 0;

  ${media.phone`
    left: 50%;
  `}

  #top-blob {
    animation: ${fadeInAnimation} 600ms ease-in 400ms forwards;
  }

  #mid-blob {
    animation: ${fadeInAnimation} 600ms ease-in 800ms forwards;
  }

  #bottom-blob {
    animation: ${fadeInAnimation} 600ms ease-in 1200ms forwards;
  }

  ${media.smallPhone`
    height: 30px;
    bottom: -2.3rem
  `};
`;

export default BubbleTail;
