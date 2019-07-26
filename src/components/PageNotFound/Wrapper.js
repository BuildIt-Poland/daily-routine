import styled from 'styled-components';

import { colorWhite } from '../../styles/designTokens';
import media from '../../styles/media';
import Section from '../Section';

const Wrapper = styled(Section)`
  background: ${colorWhite};

  ${media.phone`
    background: inherit;
  `};
`;

export default Wrapper;
