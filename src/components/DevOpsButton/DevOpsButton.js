import React from 'react';
import styled from 'styled-components';

import { colorBlue, colorDarkBlue } from '../../styles/designTokens';
import RoleButton from '../RoleButton';

const StyledRoleButton = styled(RoleButton)`
  background: ${colorBlue};
  border-bottom-color: ${colorDarkBlue};
`;

function DevOpsButton() {
  return <StyledRoleButton to="/devops">Dev Ops</StyledRoleButton>;
}

export default DevOpsButton;
