import React from 'react';
import PropTypes from 'prop-types';

import { BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION } from '../../constants/roles';
import BragButton from './BragButton';
import ConfessButton from './ConfessButton';

// TODO Probably 'to' prop is not even needed, could be extracted from route and set automatically based on extractRoleFromPath util @blurbyte

function RoleActionButton({ variant, to }) {
  switch (variant) {
    case BRAG_ROLE_ACTION:
      return <BragButton to={to} />;
    case CONFESS_ROLE_ACTION:
      return <ConfessButton to={to} />;
    default:
      throw new Error('Please provide one of predefined role actions as a variant.');
  }
}

RoleActionButton.propTypes = {
  variant: PropTypes.oneOf([BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION]).isRequired,
  to: PropTypes.string.isRequired
};

export default RoleActionButton;
