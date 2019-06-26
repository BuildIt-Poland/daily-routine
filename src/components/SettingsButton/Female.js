import styled from 'styled-components';

import { colorWhite } from '../../styles/designTokens';

const Female = styled.span`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  background-color: ${({ checked, theme }) => (checked ? 'initial' : theme.secondaryColor)};
  color: ${({ checked, theme }) => (checked ? theme.secondaryColor : colorWhite)};
`;

export default Female;
