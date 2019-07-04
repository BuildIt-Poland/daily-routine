import styled from 'styled-components';

import media from '../../styles/media';
import { colorWhite, spacingMedium } from '../../styles/designTokens';

const Wrapper = styled.header`
  width: 100%;
  background: ${colorWhite};
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacingMedium};

  ${media.phone`
    justify-content: flex-start;
  `};
`;

export default Wrapper;
