import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { colorRed, colorDarkRed } from '../../styles/designTokens';
import Button from '../Button';
import SaltGrinderIcon from './SaltGrinderIcon';

const StyledButton = styled(Button)`
  background-color: ${colorRed};
  border-bottom-color: ${colorDarkRed};
`;

function ConfessButton({ to }) {
  return (
    <StyledButton as={Link} to={to}>
      Confess my mistake
      <SaltGrinderIcon />
    </StyledButton>
  );
}

ConfessButton.propTypes = {
  to: PropTypes.string.isRequired
};

export default ConfessButton;
