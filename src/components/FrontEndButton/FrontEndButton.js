import React from 'react';
import styled from 'styled-components';

import { colorYellow, colorDarkYellow } from '../../styles/designTokens';
import RoleButton from '../RoleButton';

const StyledRoleButton = styled(RoleButton)`
  background: ${colorYellow};
  border-bottom-color: ${colorDarkYellow};
`;

function FrontEndButton() {
  return <StyledRoleButton to="/frontend">Front End Engineer</StyledRoleButton>;
}

export default FrontEndButton;
