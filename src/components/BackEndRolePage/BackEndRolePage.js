import React from 'react';
import { Route } from 'react-router-dom';

import { BACK_END_ROLE, BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION } from '../../constants/roles';
import ActionButtons from '../ActionButtons';
import RoleBar from '../RoleBar';
import Section from '../Section';
import Confess from './Confess';
import Brag from './Brag';
import Default from './Default';

function BackEndRolePage() {
  return (
    <>
      <RoleBar label="Back End Developer" />
      <Section>
        <Route exact path={`/${BACK_END_ROLE}`} component={Default} />
        <Route exact path={`/${BACK_END_ROLE}/${BRAG_ROLE_ACTION}`} component={Brag} />
        <Route exact path={`/${BACK_END_ROLE}/${CONFESS_ROLE_ACTION}`} component={Confess} />
        <ActionButtons role={BACK_END_ROLE} />
      </Section>
    </>
  );
}

export default BackEndRolePage;
