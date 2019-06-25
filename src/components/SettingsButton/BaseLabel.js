import styled from 'styled-components';

import { borderWidthThick, colorWhite } from '../../styles/designTokens';

const BaseLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 4rem;
  width: 100%;
  background-color: ${colorWhite};
  color: ${({ theme }) => theme.secondaryColor};
  border: ${borderWidthThick} solid ${({ theme }) => theme.secondaryColor};
`;

export default BaseLabel;
