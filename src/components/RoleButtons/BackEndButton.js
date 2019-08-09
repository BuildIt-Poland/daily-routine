import React from 'react';
import styled from 'styled-components';

import { colorPurple, colorDeepPurple } from '../../styles/designTokens';
import { BACK_END_ROLE, BACK_END_ROLE_LABEL } from '../../constants/roles';
import RedirectButton from '../RedirectButton';

const StyledButton = styled(RedirectButton)`
  background-color: ${colorPurple};
  border-bottom-color: ${colorDeepPurple};
`;

function BackEndButton() {
  return (
    <StyledButton to={`/${BACK_END_ROLE}`} data-testid={`${BACK_END_ROLE}-button`}>
      {BACK_END_ROLE_LABEL}
    </StyledButton>
  );
}

export default BackEndButton;
