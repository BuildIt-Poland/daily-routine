import React from 'react';
import PropTypes from 'prop-types';

import { Gear } from '../Icons';
import Hitbox from '../Hitbox';

function GearButton({ onClick }) {
  return (
    <Hitbox aria-label="Open settings" onClick={onClick} data-testid="gear-button" alternativeFocusStyle>
      <Gear />
    </Hitbox>
  );
}

GearButton.propTypes = {
  onClick: PropTypes.func
};

export default GearButton;
