import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { Gear } from '../Icons';

function GearButton({ onClick = () => {} }) {
  return (
    <Button onClick={onClick} data-testid="gear-button">
      <Gear />
    </Button>
  );
}

GearButton.propTypes = {
  onClick: PropTypes.func
};

export default GearButton;
