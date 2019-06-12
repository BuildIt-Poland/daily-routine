import React from 'react';
import styled from 'styled-components';

import { Lightbulb } from '../Icons';
import Button from '../Button';
import { colorGreen } from '../../styles/designTokens';

const GreenButton = styled(Button)`
  background: ${colorGreen};
`;

function BragButton() {
  return (
    <GreenButton label="Brag about my achievements">
      <Lightbulb />
    </GreenButton>
  );
}

export default BragButton;
