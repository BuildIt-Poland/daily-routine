import React from 'react';
import styled from 'styled-components';

import { colorRed, darkRed } from '../../styles/designTokens';
import WideButton from '../WideButton';
import Icon from './Icon';

const StyledButton = styled(WideButton)`
  background-color: ${colorRed};
  border-bottom-color: ${darkRed};
`;

function ConfessButton() {
  return <StyledButton icon={<Icon />}>Confess my mistake</StyledButton>;
}

export default ConfessButton;
