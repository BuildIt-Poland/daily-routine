import React from 'react';
import PropTypes from 'prop-types';

import Hitbox from '../Hitbox';
import { Gear } from '../Icons';

function GearButton({ onClick = () => {} }) {
  return (
    <Hitbox aria-label="Open settings" onClick={onClick} data-testid="gear-button">
      <Gear />
    </Hitbox>
  );
}

GearButton.propTypes = {
  onClick: PropTypes.func
};

export default GearButton;
