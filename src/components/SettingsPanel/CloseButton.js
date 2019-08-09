import React from 'react';
import PropTypes from 'prop-types';

import Hitbox from '../Hitbox';
import { Cross } from '../Icons';

function CloseButton({ onClick }) {
  return (
    <Hitbox aria-label="Close settings" onClick={onClick} data-testid="close-button" alternativeFocusStyle>
      <Cross />
    </Hitbox>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func
};

export default CloseButton;
