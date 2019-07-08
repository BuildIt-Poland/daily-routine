import React, { useState } from 'react';
import styled from 'styled-components';

import { role } from '../../types';
import { CONFESS_ROLE_ACTION } from '../../constants/roles';
import { colorRed, colorDarkRed } from '../../styles/designTokens';
import SaltGrinderIcon from './SaltGrinderIcon';
import ButtonBase from './ButtonBase';

const StyledButton = styled(ButtonBase)`
  background-color: ${colorRed};
  border-bottom-color: ${colorDarkRed};
`;

function ConfessButton({ role, ...props }) {
  const [text, setText] = useState('Confess my mistake');

  const changeText = () => setText('Confess again');

  return (
    <StyledButton to={`/${role}/${CONFESS_ROLE_ACTION}`} icon={SaltGrinderIcon} {...props} onClick={changeText}>
      {text}
    </StyledButton>
  );
}

ConfessButton.propTypes = {
  role: role.isRequired
};

export default ConfessButton;
