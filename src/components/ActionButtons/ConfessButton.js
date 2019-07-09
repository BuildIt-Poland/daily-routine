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

const BUTTON_LABEL = 'Confess my mistake';
const UPDATED_BUTTON_LABEL = 'Confess again';

function ConfessButton({ role, ...props }) {
  const [text, setText] = useState(BUTTON_LABEL);

  const updateButtonLabel = () => setText(UPDATED_BUTTON_LABEL);

  return (
    <StyledButton to={`/${role}/${CONFESS_ROLE_ACTION}`} icon={SaltGrinderIcon} {...props} onClick={updateButtonLabel}>
      {text}
    </StyledButton>
  );
}

ConfessButton.propTypes = {
  role: role.isRequired
};

export default ConfessButton;
