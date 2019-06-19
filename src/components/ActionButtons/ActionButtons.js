// Brag and Confess buttons for specified role

import React from 'react';

import { role } from '../../types';
import BragButton from './BragButton';
import ConfessButton from './ConfessButton';

function ActionButtons({ role }) {
  return (
    <nav>
      <BragButton role={role} />
      <ConfessButton role={role} />
    </nav>
  );
}

ActionButtons.propTypes = {
  role: role.isRequired
};

export default ActionButtons;
