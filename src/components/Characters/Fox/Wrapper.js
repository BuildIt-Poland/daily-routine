import styled from 'styled-components';

import media from '../../../styles/media';
import { spacingLarge } from '../../../styles/designTokens';

const Wrapper = styled.div`
  padding: 3rem 0 ${spacingLarge} 0;
  position: relative;

  ${media.phone`
    padding-bottom: 0;
  `};
`;

export default Wrapper;
