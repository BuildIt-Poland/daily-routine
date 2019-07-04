import styled from 'styled-components';

import media from '../../styles/media';
import { spacingSmall, fontXLarge } from '../../styles/designTokens';

const Headline = styled.h1`
  font-size: ${fontXLarge};
  margin: 0;
  margin-bottom: ${spacingSmall};
  text-align: center;

  ${media.phone`
    text-align: left;
  `};
`;

export default Headline;
