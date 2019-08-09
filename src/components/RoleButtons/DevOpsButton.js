import React from 'react';
import styled from 'styled-components';

import { colorBlue, colorDarkBlue } from '../../styles/designTokens';
import { DEV_OPS_ROLE, DEV_OPS_ROLE_LABEL } from '../../constants/roles';
import RedirectButton from '../RedirectButton';

const StyledButton = styled(RedirectButton)`
  background-color: ${colorBlue};
  border-bottom-color: ${colorDarkBlue};
`;

function DevOpsButton() {
  return (
    <StyledButton to={DEV_OPS_ROLE} data-testid={`${DEV_OPS_ROLE}-button`}>
      {DEV_OPS_ROLE_LABEL}
    </StyledButton>
  );
}

export default DevOpsButton;
