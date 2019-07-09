import React from 'react';
import { Route } from 'react-router-dom';

import { BACK_END_ROLE, BACK_END_ROLE_LABEL } from '../../constants/roles';
import { BRAG, CONFESS } from '../../constants/roleActions';
import Page from '../Page';
import ActionButtons from '../ActionButtons';
import RoleBar from '../RoleBar';
import Section from '../Section';
import RoleContent from '../RoleContent';
import Confess from './BackEndConfess';
import Brag from './BackEndBrag';
import Default from './BackEndDefault';

function BackEndRolePage() {
  return (
    <>
      <Page title={BACK_END_ROLE_LABEL}>
        <RoleBar label={BACK_END_ROLE_LABEL} />
        <Section>
          <RoleContent>
            <Route exact path={`/${BACK_END_ROLE}`} component={Default} />
            <Route exact path={`/${BACK_END_ROLE}/${BRAG}`} component={Brag} />
            <Route exact path={`/${BACK_END_ROLE}/${CONFESS}`} component={Confess} />
          </RoleContent>
        </Section>
        <ActionButtons role={BACK_END_ROLE} />
      </Page>
    </>
  );
}

export default BackEndRolePage;
