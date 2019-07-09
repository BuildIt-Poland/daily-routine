import styled from 'styled-components';

import media from '../../styles/media';
import SpeechBubbleArtwork from './SpeechBubbleArtwork';

const Wrapper = styled.section`
  position: relative;
  margin-bottom: 2rem;
  margin-left: auto;
  min-height: 9.6rem;
  min-width: 21rem;
  max-width: 36rem;
  background: url(${SpeechBubbleArtwork}) no-repeat;
  background-size: 100% 100%;

  ${media.phone`
    max-width: 100%;
  `}
`;

export default Wrapper;
