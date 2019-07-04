import styled from 'styled-components';

import media from '../../styles/media';
import { colorWhite, spacingLarge } from '../../styles/designTokens';
import Section from '../Section';

const Wrapper = styled(Section)`
  background: ${colorWhite};
  margin-top: ${spacingLarge};

  ${media.phone`
    background: inherit;
  `};
`;

export default Wrapper;
