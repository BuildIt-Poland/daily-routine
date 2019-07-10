import styled from 'styled-components';

import media from '../../styles/media';
import { spacingLarge } from '../../styles/designTokens';

const CharacterWrapper = styled.div`
  padding: 0;
  padding-bottom: ${spacingLarge};
  position: relative;

  ${media.phone`
    padding-bottom: 0;
  `};
`;

export default CharacterWrapper;
