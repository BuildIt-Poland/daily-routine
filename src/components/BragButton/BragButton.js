import React from 'react';
import styled from 'styled-components';

import { colorGreen } from '../../styles/designTokens';
import Button from '../Button';
import Icon from './Icon';

const StyledButton = styled(Button)`
  background: ${colorGreen};
`;

function BragButton() {
  return <StyledButton icon={<Icon />}>Brag about my achievements</StyledButton>;
}

export default BragButton;
