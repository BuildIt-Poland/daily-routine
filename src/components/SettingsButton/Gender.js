import styled from 'styled-components';

import { borderWidthThick, borderRadius } from '../../styles/designTokens';

const Gender = styled.span`
  display: flex;
  height: 4rem;
  width: 100%;
  cursor: pointer;
  border: ${borderWidthThick} solid ${({ theme }) => theme.secondaryColor};
  border-radius: ${borderRadius};
`;

export default Gender;
