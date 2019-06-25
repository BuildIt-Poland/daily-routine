import styled from 'styled-components';

import { colorWhite } from '../../styles/designTokens';
import BaseLabel from './BaseLabel';

const BaseButton = styled.input`
  display: none;
  &:checked + ${BaseLabel} {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${colorWhite};
  }
`;

export default BaseButton;
