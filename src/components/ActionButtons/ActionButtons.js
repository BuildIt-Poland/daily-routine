// Brag and Confess buttons for specified role

import React from 'react';

import { role } from '../../types';
import { BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION } from '../../constants/roles';
import BragButton from './BragButton';
import ConfessButton from './ConfessButton';

function ActionButtons({ role }) {
  return (
    <nav>
      <BragButton role={role} data-testid={`${role}-${BRAG_ROLE_ACTION}-button`} />
      <ConfessButton role={role} data-testid={`${role}-${CONFESS_ROLE_ACTION}-button`} />
    </nav>
  );
}

ActionButtons.propTypes = {
  role: role.isRequired
};

export default ActionButtons;
