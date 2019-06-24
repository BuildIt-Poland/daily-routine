import React from 'react';
import { Route } from 'react-router-dom';

import { DEV_OPS_ROLE, BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION } from '../../constants/roles';
import ActionButtons from '../ActionButtons';
import RoleBar from '../RoleBar';
import Section from '../Section';
import QuoteBubble from '../QuoteBubble';
import Default from './Default';
import Brag from './Brag';
import Confess from './Confess';

// TODO Replace with auto-generated message @blurbyte
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function DevOpsRolePage() {
  return (
    <>
      <RoleBar label="Dev Ops" />
      <Section>
        <Route exact path={`/${DEV_OPS_ROLE}`} component={Default} />
        <Route exact path={`/${DEV_OPS_ROLE}/${BRAG_ROLE_ACTION}`} component={Brag} />
        <Route exact path={`/${DEV_OPS_ROLE}/${CONFESS_ROLE_ACTION}`} component={Confess} />
        <QuoteBubble quote={QUOTE} />
        <ActionButtons role={DEV_OPS_ROLE} />
      </Section>
    </>
  );
}

export default DevOpsRolePage;
