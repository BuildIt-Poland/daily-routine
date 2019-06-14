import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { Gear } from '../Icons';

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
