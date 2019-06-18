import styled from 'styled-components';
import { zIndexModalOverlay } from '../../styles/designTokens';

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${zIndexModalOverlay};
`;

export default Overlay;
