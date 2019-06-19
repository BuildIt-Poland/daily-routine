import React from 'react';
import Section from '../Section';
import Default from './Default';
import Brag from './Brag';
import Confess from './Confess';
import { Route } from 'react-router-dom';
import RoleBar from '../RoleBar';
import QuoteBubble from '../QuoteBubble';
import { BRAG_ROLE_ACTION, CONFESS_ROLE_ACTION, FRONT_END_ROLE } from '../../constants/roles';
import ActionButtons from '../ActionButtons';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function FrontEndRolePage() {
  return (
    <>
      <RoleBar label="Front End Developer" />
      <Section>
        <Route exact path={`/${FRONT_END_ROLE}`} component={Default} />
        <Route exact path={`/${FRONT_END_ROLE}/${BRAG_ROLE_ACTION}`} component={Brag} />
        <Route exact path={`/${FRONT_END_ROLE}/${CONFESS_ROLE_ACTION}`} component={Confess} />
        <QuoteBubble quote={QUOTE} />
        <ActionButtons role={FRONT_END_ROLE} />
      </Section>
    </>
  );
}

export default FrontEndRolePage;
