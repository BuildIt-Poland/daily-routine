import React from 'react';
import { Route } from 'react-router-dom';

import { BACK_END_ROLE_PATH, BRAG_PATH, CONFESS_PATH } from '../../constants/routes';
import { BRAG_VARIANT, CONFESS_VARIANT } from '../../constants/coloursVariants';
import WideButton from '../WideButton';
import RoleBar from '../RoleBar';
import Section from '../Section';
import QuoteBubble from '../QuoteBubble';
import Default from './Default';
import Brag from './Brag';
import Confess from './Confess';

// TODO Replace with auto-generated message @blurbyte
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function BackEndRolePage() {
  return (
    <>
      <RoleBar label="Back End Developer" />
      <Section>
        <Route exact path={BACK_END_ROLE_PATH} component={Default} />
        <Route exact path={BACK_END_ROLE_PATH + BRAG_PATH} component={Brag} />
        <Route exact path={BACK_END_ROLE_PATH + CONFESS_PATH} component={Confess} />
        <QuoteBubble quote={QUOTE} />
        <WideButton variant={BRAG_VARIANT}>Brag about my efforts</WideButton>
        <WideButton variant={CONFESS_VARIANT}>Confess my mistake</WideButton>
      </Section>
    </>
  );
}

export default BackEndRolePage;
