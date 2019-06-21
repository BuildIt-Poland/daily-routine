import styled from 'styled-components';
import { animated } from 'react-spring';

import { zIndexModal, colorWhite } from '../../styles/designTokens';

const Wrapper = styled(animated.section)`
  height: 100%;
  width: 26rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colorWhite};
  z-index: ${zIndexModal};
`;

export default Wrapper;
