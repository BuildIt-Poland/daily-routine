import React from 'react';
import { Route } from 'react-router-dom';

import { DEV_OPS_ROLE, DEV_OPS_ROLE_LABEL } from '../../constants/roles';
import { BRAG, CONFESS } from '../../constants/roleActions';
import Page from '../Page';
import ActionButtons from '../ActionButtons';
import RoleBar from '../RoleBar';
import Section from '../Section';
import Content from '../Content';
import Default from './DevOpsDefault';
import Brag from './DevOpsBrag';
import Confess from './DevOpsConfess';

function DevOpsRolePage() {
  return (
    <>
      <RoleBar label={DEV_OPS_ROLE_LABEL} />
      <Page title={DEV_OPS_ROLE_LABEL}>
        <Section>
          <Content narrow>
            <Route exact path={`/${DEV_OPS_ROLE}`} component={Default} />
            <Route exact path={`/${DEV_OPS_ROLE}/${BRAG}`} component={Brag} />
            <Route exact path={`/${DEV_OPS_ROLE}/${CONFESS}`} component={Confess} />
          </Content>
        </Section>
        <ActionButtons role={DEV_OPS_ROLE} />
      </Page>
    </>
  );
}

export default DevOpsRolePage;
