import styled from 'styled-components';

import media from '../../../styles/media';
import { spacingMedium } from '../../../styles/designTokens';

const Wrapper = styled.div`
  position: relative;
  margin: 4rem auto 0 auto;
  width: 28rem;
  padding: ${spacingMedium} 0;

  ${media.phone`
    padding-top: 0;
  `};
`;

export default Wrapper;
