import styled from 'styled-components';

import media from '../../styles/media';
import { spacingMedium } from '../../styles/designTokens';

const Section = styled.section`
  position: relative;
  padding: 0;
  padding-top: ${spacingMedium};

  ${media.phone`
    padding-top: 4rem
  `};
`;

export default Section;
