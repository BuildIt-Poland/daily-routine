import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const BUTTON_LABEL = 'Brag about my efforts';
const UPDATED_BUTTON_LABEL = 'Brag more';

function BragButton({ quoteID, role, ...props }) {
  const [text, setText] = useState(BUTTON_LABEL);

  const updateButtonLabel = () => setText(UPDATED_BUTTON_LABEL);

  return (
    <StyledButton
      {...props}
      to={`/${role}/${BRAG_ROLE_ACTION}/${quoteID}`}
      icon={LightbulbIcon}
      onClick={updateButtonLabel}
    >
      {text}
    </StyledButton>
  );
}

BragButton.propTypes = {
  role: role.isRequired,
  quoteID: PropTypes.string.isRequired
};

export default BragButton;
