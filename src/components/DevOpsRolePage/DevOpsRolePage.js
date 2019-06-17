import React from 'react';
import { Route } from 'react-router-dom';

import { DEV_OPS_ROLE_PATH, BRAG_PATH, CONFESS_PATH } from '../../constants/routes';
import Section from '../Section';
import QuoteBubble from '../QuoteBubble';
import Default from './Default';
import Brag from './Brag';
import Confess from './Confess';

// TODO Replace with auto-generated message @blurbyte
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function DevOpsRolePage() {
  return (
    <Section>
      <QuoteBubble quote={QUOTE} />
      <Route exact path={DEV_OPS_ROLE_PATH} component={Default} />
      <Route exact path={DEV_OPS_ROLE_PATH + BRAG_PATH} component={Brag} />
      <Route exact path={DEV_OPS_ROLE_PATH + CONFESS_PATH} component={Confess} />
    </Section>
  );
}

export default DevOpsRolePage;
