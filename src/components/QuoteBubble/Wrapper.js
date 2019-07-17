import styled from 'styled-components';

import { spacingMedium, zIndexDefault } from '../../styles/designTokens';

const Wrapper = styled.section.attrs(props => ({
  style: { height: props.calculatedHeight }
}))`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 9.6rem;
  margin-bottom: ${spacingMedium};
  z-index: ${zIndexDefault};
`;

export default Wrapper;
