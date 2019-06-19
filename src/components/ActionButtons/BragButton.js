import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { role } from '../../types';
import { BRAG_ROLE_ACTION } from '../../constants/roles';
import { colorGreen, colorDarkGreen } from '../../styles/designTokens';
import Button from '../Button';
import LightbulbIcon from './LightbulbIcon';

const StyledButton = styled(Button)`
  background-color: ${colorGreen};
  border-bottom-color: ${colorDarkGreen};
`;

function BragButton({ role }) {
  return (
    <StyledButton as={Link} to={`/${role}/${BRAG_ROLE_ACTION}`}>
      Brag about my efforts
      <LightbulbIcon />
    </StyledButton>
  );
}

BragButton.propTypes = {
  role: role.isRequired
};

export default BragButton;
