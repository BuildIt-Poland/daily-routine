import styled from 'styled-components';

import { zIndexDefault } from '../../styles/designTokens';

const Input = styled.input`
  visibility: hidden;
  position: absolute;
  z-index: ${zIndexDefault};
`;

export default Input;
