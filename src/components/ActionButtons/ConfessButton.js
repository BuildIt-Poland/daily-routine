import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { role } from '../../types';
import { CONFESS } from '../../constants/roleActions';
import { colorRed, colorDarkRed } from '../../styles/designTokens';
import SaltGrinderIcon from './SaltGrinderIcon';
import ButtonBase from './ButtonBase';

const StyledButton = styled(ButtonBase)`
  background-color: ${colorRed};
  border-bottom-color: ${colorDarkRed};
`;

const BUTTON_LABEL = 'Confess my mistake';
const UPDATED_BUTTON_LABEL = 'Confess again';

function ConfessButton({ quoteID, role, ...props }) {
  const [text, setText] = useState(BUTTON_LABEL);

  const updateButtonLabel = () => setText(UPDATED_BUTTON_LABEL);

  return (
    <StyledButton {...props} to={`/${role}/${CONFESS}/${quoteID}`} icon={SaltGrinderIcon} onClick={updateButtonLabel}>
      {text}
    </StyledButton>
  );
}

ConfessButton.propTypes = {
  role: role.isRequired,
  quoteID: PropTypes.string.isRequired
};

export default ConfessButton;
