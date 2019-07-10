import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

function ConfessButton({ quoteID = 1, role, ...props }) {
  const [text, setText] = useState(BUTTON_LABEL);

  const updateButtonLabel = () => setText(UPDATED_BUTTON_LABEL);

  return (
    <StyledButton
      {...props}
      to={`/${role}/${CONFESS_ROLE_ACTION}/${quoteID}`}
      icon={SaltGrinderIcon}
      onClick={updateButtonLabel}
    >
      {text}
    </StyledButton>
  );
}

ConfessButton.propTypes = {
  role: role.isRequired,
  quoteID: PropTypes.string
};

export default ConfessButton;
