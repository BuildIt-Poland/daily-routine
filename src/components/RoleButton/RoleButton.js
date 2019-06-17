import React from 'react';
import PropTypes from 'prop-types';

import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import { FRONT_END_ROLE_PATH, BACK_END_ROLE_PATH, DEV_OPS_ROLE_PATH } from '../../constants/routes';
import FrontEndButton from './FrontEndButton';
import BackEndButton from './BackEndButton';
import DevOpsButton from './DevOpsButton';

function RoleButton({ variant }) {
  switch (variant) {
    case FRONT_END_ROLE:
      return <FrontEndButton to={FRONT_END_ROLE_PATH}>Front End Engineer</FrontEndButton>;
    case BACK_END_ROLE:
      return <BackEndButton to={BACK_END_ROLE_PATH}>Back End Developer</BackEndButton>;
    case DEV_OPS_ROLE:
      return <DevOpsButton to={DEV_OPS_ROLE_PATH}>Dev Ops</DevOpsButton>;
    default:
      throw new Error('Please provide one of predefined roles as a variant.');
  }
}

RoleButton.propTypes = {
  variant: PropTypes.oneOf([FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE])
};

export default RoleButton;
