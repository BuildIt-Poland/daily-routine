// Set of links to vsrious roles

import React from 'react';

import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import FrontEndButton from './FrontEndButton';
import BackEndButton from './BackEndButton';
import DevOpsButton from './DevOpsButton';

function RoleButtons() {
  return (
    <nav>
      <FrontEndButton to={`/${FRONT_END_ROLE}`} data-testid={`${FRONT_END_ROLE}-button`}>
        Front End Engineer
      </FrontEndButton>
      <BackEndButton to={`/${BACK_END_ROLE}`} data-testid={`${BACK_END_ROLE}-button`}>
        Back End Developer
      </BackEndButton>
      <DevOpsButton to={`/${DEV_OPS_ROLE}`} data-testid={`${DEV_OPS_ROLE}-button`}>
        Dev Ops
      </DevOpsButton>
    </nav>
  );
}

export default RoleButtons;
