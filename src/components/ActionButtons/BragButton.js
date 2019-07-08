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

const TEXT = 'Brag about my efforts';

const TEXT_AFTER_CLICK = 'Brag more';

function BragButton({ role, ...props }) {
  const [text, setText] = useState(TEXT);

  const changeText = () => setText(TEXT_AFTER_CLICK);

  return (
    <StyledButton to={`/${role}/${BRAG_ROLE_ACTION}`} icon={LightbulbIcon} {...props} onClick={changeText}>
      {text}
    </StyledButton>
  );
}

BragButton.propTypes = {
  role: role.isRequired
};

export default BragButton;
