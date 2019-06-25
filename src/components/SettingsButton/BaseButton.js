import styled from 'styled-components';

import { colorWhite } from '../../styles/designTokens';
import RadioButtonLabel from './BaseLabel';

const BaseButton = styled.input`
  display: none;
  &:checked + ${RadioButtonLabel} {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${colorWhite};
  }
`;

export default BaseButton;
