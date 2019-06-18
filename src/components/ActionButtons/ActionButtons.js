// Brag and Confess buttons for specified role

import React from 'react';

import { role } from '../../types';
import BragButton from './BragButton';
import ConfessButton from './ConfessButton';

function RoleActionButtons({ role }) {
  return (
    <nav>
      <BragButton role={role} />
      <ConfessButton role={role} />
    </nav>
  );
}

RoleActionButtons.propTypes = {
  role: role.isRequired
};

export default RoleActionButtons;
