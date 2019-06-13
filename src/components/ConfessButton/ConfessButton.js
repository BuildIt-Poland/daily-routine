import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import Button from '../Button';
import { colorRed, darkRed } from '../../styles/designTokens';

const StyledButton = styled(Button)`
  background: ${colorRed};
  border-bottom-color: ${darkRed};
`;

function ConfessButton() {
  return <StyledButton icon={<Icon />}>Confess my mistake</StyledButton>;
}

export default ConfessButton;
