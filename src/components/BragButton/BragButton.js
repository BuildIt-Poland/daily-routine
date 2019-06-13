import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import Button from '../Button';
import { colorGreen } from '../../styles/designTokens';

const StyledButton = styled(Button)`
  background: ${colorGreen};
`;

function BragButton() {
  return <StyledButton icon={<Icon />}>Brag about my achievements</StyledButton>;
}

export default BragButton;
