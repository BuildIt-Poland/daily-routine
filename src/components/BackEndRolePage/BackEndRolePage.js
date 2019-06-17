import React from 'react';
import { Route } from 'react-router-dom';

import { BACK_END_ROLE_PATH, BRAG_PATH, CONFESS_PATH } from '../../constants/routes';
import RoleBar from '../RoleBar';
import Section from '../Section';
import QuoteBubble from '../QuoteBubble';
import BragButton from '../BragButton';
import ConfessButton from '../ConfessButton';
import Default from './Default';
import Brag from './Brag';
import Confess from './Confess';

function BackEndRolePage() {
  return (
    <>
      <RoleBar />
      <Section>
        <Route exact path={BACK_END_ROLE_PATH} component={Default} />
        <Route exact path={BACK_END_ROLE_PATH + BRAG_PATH} component={Brag} />
        <Route exact path={BACK_END_ROLE_PATH + CONFESS_PATH} component={Confess} />
        <QuoteBubble />
        <BragButton />
        <ConfessButton />
      </Section>
    </>
  );
}

export default BackEndRolePage;
