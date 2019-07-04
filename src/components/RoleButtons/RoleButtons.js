// Set of links to vsrious roles

import React from 'react';

import {
  FRONT_END_ROLE,
  BACK_END_ROLE,
  DEV_OPS_ROLE,
  FRONT_END_ROLE_LABEL,
  DEV_OPS_ROLE_LABEL,
  BACK_END_ROLE_LABEL
} from '../../constants/roles';
import Content from '../Content';
import Headline from '../Headline';
import Navigation from '../Navigation';
import Wrapper from './Wrapper';
import FrontEndButton from './FrontEndButton';
import BackEndButton from './BackEndButton';
import DevOpsButton from './DevOpsButton';

function RoleButtons() {
  return (
    <Wrapper>
      <Content>
        <Headline>Pick your role!</Headline>
        <Navigation>
          <FrontEndButton to={`/${FRONT_END_ROLE}`} data-testid={`${FRONT_END_ROLE}-button`}>
            {FRONT_END_ROLE_LABEL}
          </FrontEndButton>
          <BackEndButton to={`/${BACK_END_ROLE}`} data-testid={`${BACK_END_ROLE}-button`}>
            {BACK_END_ROLE_LABEL}
          </BackEndButton>
          <DevOpsButton to={`/${DEV_OPS_ROLE}`} data-testid={`${DEV_OPS_ROLE}-button`}>
            {DEV_OPS_ROLE_LABEL}
          </DevOpsButton>
        </Navigation>
      </Content>
    </Wrapper>
  );
}

export default RoleButtons;
