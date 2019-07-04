import styled from 'styled-components';

import media from '../../styles/media';
import { colorWhite } from '../../styles/designTokens';

const Wrapper = styled.footer`
  background: ${colorWhite};

  ${media.phone`
    background: inherit;
  `};
`;

export default Wrapper;
