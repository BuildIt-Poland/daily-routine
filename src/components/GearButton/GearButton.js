import React from 'react';
import PropTypes from 'prop-types';

import { Gear } from '../Icons';
import Button from '../Button';

function GearButton({ onClick = () => {} }) {
  return (
    <Button onClick={onClick}>
      <Gear />
    </Button>
  );
}

GearButton.propTypes = {
  onClick: PropTypes.func
};

export default GearButton;
