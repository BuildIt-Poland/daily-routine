import styled from 'styled-components';
import { animated } from 'react-spring';

import media from '../../styles/media';
import SpeechBubbleArtwork from './SpeechBubbleArtwork';

const Bubble = styled(animated.section)`
  position: absolute;
  bottom: 0;
  right: 0;
  min-height: 9.6rem;
  min-width: 21rem;
  max-width: 36rem;
  background: url(${SpeechBubbleArtwork}) no-repeat;
  background-size: 100% 100%;
  transform-origin: 50% 100%;
  z-index: -1;

  ${media.phone`
    max-width: 100%;
  `}
`;

export default Bubble;
