import styled from 'styled-components';

import { colorRed } from '../../styles/designTokens';

const ErrorMessage = styled.p`
  margin: 0;
  padding: 1.6rem 2.4rem;
  padding-bottom: 3rem;
  color: ${colorRed};
`;

export default ErrorMessage;
