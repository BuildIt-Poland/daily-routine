import React from 'react';
import { Route } from 'react-router-dom';

import { BACK_END_ROLE_PATH, BRAG_PATH, CONFESS_PATH } from '../../constants/routes';
import Section from '../Section';
import Default from './Default';
import Brag from './Brag';
import Confess from './Confess';

function BackEndRolePage() {
  return (
    <Section>
      <Route exact path={BACK_END_ROLE_PATH} component={Default} />
      <Route exact path={BACK_END_ROLE_PATH + BRAG_PATH} component={Brag} />
      <Route exact path={BACK_END_ROLE_PATH + CONFESS_PATH} component={Confess} />
    </Section>
  );
}

export default BackEndRolePage;
