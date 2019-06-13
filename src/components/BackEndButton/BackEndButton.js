import React from 'react';
import styled from 'styled-components';

import { colorPurple, colorDeepPurple } from '../../styles/designTokens';
import RoleButton from '../RoleButton';

const StyledRoleButton = styled(RoleButton)`
  background: ${colorPurple};
  border-bottom-color: ${colorDeepPurple};
`;

function BackEndButton() {
  return <StyledRoleButton to="/backend">Back End Developer</StyledRoleButton>;
}

export default BackEndButton;
