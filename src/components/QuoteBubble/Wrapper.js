import styled from 'styled-components';

import { spacingMedium, zIndexDefault } from '../../styles/designTokens';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: ${spacingMedium};
  z-index: ${zIndexDefault};
`;

export default Wrapper;
