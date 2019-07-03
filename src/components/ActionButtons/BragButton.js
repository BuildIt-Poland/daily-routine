import React from 'react';
import styled from 'styled-components';

import { role } from '../../types';
import { BRAG_ROLE_ACTION } from '../../constants/roles';
import { colorGreen, colorDarkGreen } from '../../styles/designTokens';
import LightbulbIcon from './LightbulbIcon';
import ButtonBase from './ButtonBase';

const StyledButton = styled(ButtonBase)`
  background-color: ${colorGreen};
  border-bottom-color: ${colorDarkGreen};
`;

function BragButton({ role, ...props }) {
  return (
    <StyledButton to={`/${role}/${BRAG_ROLE_ACTION}`} Icon={LightbulbIcon} {...props}>
      Brag about my efforts
    </StyledButton>
  );
}

BragButton.propTypes = {
  role: role.isRequired
};

export default BragButton;
