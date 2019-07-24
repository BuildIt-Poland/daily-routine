import styled from 'styled-components';

import media from '../../styles/media';
import { spacingSmall, fontWeightNormal, fontLarge, fontMedium } from '../../styles/designTokens';

const Subheadline = styled.h2`
  font-size: ${fontLarge};
  margin: ${spacingSmall} 0;
  font-weight: ${fontWeightNormal};
  text-align: center;

  ${media.phone`
    text-align: left;
    font-size: ${fontMedium};
  `};
`;

export default Subheadline;
