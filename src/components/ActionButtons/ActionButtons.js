// Brag and Confess buttons for specified role

import React from 'react';

import { role } from '../../types';
import { BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION } from '../../constants/roles';
import Navigation from '../Navigation';
import Content from '../Content';
import Wrapper from './Wrapper';
import BragButton from './BragButton';
import ConfessButton from './ConfessButton';

function ActionButtons({ role }) {
  return (
    <Wrapper>
      <Content>
        <Navigation>
          <BragButton role={role} data-testid={`${role}-${BRAG_ROLE_ACTION}-button`} />
          <ConfessButton role={role} data-testid={`${role}-${CONFESS_ROLE_ACTION}-button`} />
        </Navigation>
      </Content>
    </Wrapper>
  );
}

ActionButtons.propTypes = {
  role: role.isRequired
};

export default ActionButtons;
