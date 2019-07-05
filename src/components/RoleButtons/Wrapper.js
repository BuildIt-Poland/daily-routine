import styled from 'styled-components';

import media from '../../styles/media';
import { colorWhite } from '../../styles/designTokens';
import Section from '../Section';

const Wrapper = styled(Section)`
  background: ${colorWhite};

  ${media.phone`
    background: inherit;
  `};
`;

export default Wrapper;
