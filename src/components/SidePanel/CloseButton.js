import React from 'react';
import PropTypes from 'prop-types';

import Hitbox from '../Hitbox';
import { Cross } from '../Icons';

function CloseButton({ onClick }) {
  return (
    <Hitbox aria-label="Close" onClick={onClick}>
      <Cross />
    </Hitbox>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CloseButton;
