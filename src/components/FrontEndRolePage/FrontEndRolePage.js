import React from 'react';
import { Route } from 'react-router-dom';

import { FRONT_END_ROLE, FRONT_END_ROLE_LABEL } from '../../constants/roles';
import { BRAG, CONFESS } from '../../constants/roleActions';
import Page from '../Page';
import RoleBar from '../RoleBar';
import ActionButtons from '../ActionButtons';
import Section from '../Section';
import Content from '../Content';
import Default from './FrontEndDefault';
import Brag from './FrontEndBrag';
import Confess from './FrontEndConfess';

function FrontEndRolePage() {
  return (
    <>
      <RoleBar label={FRONT_END_ROLE_LABEL} />
      <Page title={FRONT_END_ROLE_LABEL}>
        <Section>
          <Content narrow>
            <Route exact path={`/${FRONT_END_ROLE}`} component={Default} />
            <Route exact path={`/${FRONT_END_ROLE}/${BRAG}`} component={Brag} />
            <Route exact path={`/${FRONT_END_ROLE}/${CONFESS}`} component={Confess} />
          </Content>
        </Section>
        <ActionButtons role={FRONT_END_ROLE} />
      </Page>
    </>
  );
}

export default FrontEndRolePage;
