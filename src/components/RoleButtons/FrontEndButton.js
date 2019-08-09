import React from 'react';
import styled from 'styled-components';

import { colorYellow, colorDarkYellow } from '../../styles/designTokens';
import { FRONT_END_ROLE, FRONT_END_ROLE_LABEL } from '../../constants/roles';
import RedirectButton from '../RedirectButton';

const StyledButton = styled(RedirectButton)`
  background-color: ${colorYellow};
  border-bottom-color: ${colorDarkYellow};
`;

function FrontEndButton() {
  return (
    <StyledButton to={`/${FRONT_END_ROLE}`} data-testid={`${FRONT_END_ROLE}-button`}>
      {FRONT_END_ROLE_LABEL}
    </StyledButton>
  );
}

export default FrontEndButton;
