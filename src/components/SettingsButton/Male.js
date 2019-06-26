import styled from 'styled-components';

import { colorWhite } from '../../styles/designTokens';

const Male = styled.span`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  background-color: ${({ checked, theme }) => (checked ? theme.secondaryColor : 'initial')};
  color: ${({ checked, theme }) => (checked ? colorWhite : theme.secondaryColor)};
`;

export default Male;
