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

const TEXT = 'Confess my mistake';

const TEXT_AFTER_CLICK = 'Confess again';

function ConfessButton({ role, ...props }) {
  const [text, setText] = useState(TEXT);

  const changeText = () => setText(TEXT_AFTER_CLICK);

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
