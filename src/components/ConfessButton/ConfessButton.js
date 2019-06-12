import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import { SaltGrinder } from '../Icons';
import { colorRed } from '../../styles/designTokens';

const RedButton = styled(Button)`
  background: ${colorRed};
`;

function ConfessButton() {
  return (
    <RedButton label="Confess my mistake">
      <SaltGrinder />
    </RedButton>
  );
}

export default ConfessButton;
