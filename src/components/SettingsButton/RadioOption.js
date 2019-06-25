import styled from 'styled-components';

import { colorWhite } from '../../styles/designTokens';
import RadioLabel from './RadioLabel';

const RadioOption = styled.input`
  display: none;
  &:checked + ${RadioLabel} {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${colorWhite};
  }
`;

export default RadioOption;
