import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { colorGreen, colorDarkGreen } from '../../styles/designTokens';
import Button from '../Button';
import LightbulbIcon from './LightbulbIcon';

const StyledButton = styled(Button)`
  background-color: ${colorGreen};
  border-bottom-color: ${colorDarkGreen};
`;

function BragButton({ to }) {
  return (
    <StyledButton as={Link} to={to}>
      Brag about my efforts
      <LightbulbIcon />
    </StyledButton>
  );
}

BragButton.propTypes = {
  to: PropTypes.string.isRequired
};

export default BragButton;
