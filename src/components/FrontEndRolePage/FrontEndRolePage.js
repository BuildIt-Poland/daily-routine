import React from 'react';
import { Route } from 'react-router-dom';

import { FRONT_END_ROLE } from '../../constants/roles';
import { BRAG, CONFESS } from '../../constants/roleActions';
import RoleBar from '../RoleBar';
import ActionButtons from '../ActionButtons';
import Section from '../Section';
import Default from './FrontEndDefault';
import Brag from './FrontEndBrag';
import Confess from './FrontEndConfess';

function FrontEndRolePage() {
  return (
    <>
      <RoleBar label="Front End Engineer" />
      <Section>
        <Route exact path={`/${FRONT_END_ROLE}`} component={Default} />
        <Route exact path={`/${FRONT_END_ROLE}/${BRAG}`} component={Brag} />
        <Route exact path={`/${FRONT_END_ROLE}/${CONFESS}`} component={Confess} />
        <ActionButtons role={FRONT_END_ROLE} />
      </Section>
    </>
  );
}

export default FrontEndRolePage;
