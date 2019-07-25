import styled, { keyframes } from 'styled-components';

import { zIndexArtworkMainDecor } from './../../../styles/designTokens';
import TailArtwork from './TailArtwork';

const tailAnimation = keyframes`
  0% { transform: rotate(0deg)}
  50% { transform: rotate(8deg)}
  100% { transform: rotate(0deg)}
`;

const Tail = styled(TailArtwork)`
  position: absolute;
  top: 3.8rem;
  left: 16.8rem;
  color: ${props => props.theme.primaryColor};
  z-index: ${zIndexArtworkMainDecor};
  transform-origin: 10.4rem 0.2rem;
  animation: ${tailAnimation} 5s ease-in-out infinite;
`;

export default Tail;
