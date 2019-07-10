import React from 'react';
import { Route } from 'react-router-dom';

import { DEV_OPS_ROLE, DEV_OPS_ROLE_LABEL } from '../../constants/roles';
import { BRAG, CONFESS } from '../../constants/roleActions';
import Page from '../Page';
import ActionButtons from '../ActionButtons';
import RoleBar from '../RoleBar';
import Section from '../Section';
import RoleContent from '../RoleContent';
import Default from './DevOpsDefault';
import Brag from './DevOpsBrag';
import Confess from './DevOpsConfess';

function DevOpsRolePage() {
  return (
    <>
      <Page title={DEV_OPS_ROLE_LABEL}>
        <RoleBar label={DEV_OPS_ROLE_LABEL} />
        <Section>
          <RoleContent>
            <Route exact path={`/${DEV_OPS_ROLE}`} component={Default} />
            <Route exact path={`/${DEV_OPS_ROLE}/${BRAG}`} component={Brag} />
            <Route exact path={`/${DEV_OPS_ROLE}/${CONFESS}`} component={Confess} />
          </RoleContent>
        </Section>
        <ActionButtons role={DEV_OPS_ROLE} />
      </Page>
    </>
  );
}

export default DevOpsRolePage;
