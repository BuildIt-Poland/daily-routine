import React, { useState } from 'react';
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

function BragButton({ role, ...props }) {
  const [text, setText] = useState(BUTTON_LABEL);

  const updateButtonLabel = () => setText(UPDATED_BUTTON_LABEL);

  return (
    <StyledButton to={`/${role}/${BRAG_ROLE_ACTION}`} icon={LightbulbIcon} {...props} onClick={updateButtonLabel}>
      {text}
    </StyledButton>
  );
}

BragButton.propTypes = {
  role: role.isRequired
};

export default BragButton;
