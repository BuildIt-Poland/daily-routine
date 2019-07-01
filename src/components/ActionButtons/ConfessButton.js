import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { role } from '../../types';
import { CONFESS_ROLE_ACTION } from '../../constants/roles';
import { colorRed, colorDarkRed } from '../../styles/designTokens';
import Button from '../Button';
import SaltGrinderIcon from './SaltGrinderIcon';

const StyledButton = styled(Button)`
  background-color: ${colorRed};
  border-bottom-color: ${colorDarkRed};
`;

function ConfessButton({ role, ...props }) {
  return (
    <StyledButton as={Link} to={`/${role}/${CONFESS_ROLE_ACTION}`} {...props}>
      Confess my mistake
      <SaltGrinderIcon />
    </StyledButton>
  );
}

ConfessButton.propTypes = {
  role: role.isRequired
};

export default ConfessButton;
