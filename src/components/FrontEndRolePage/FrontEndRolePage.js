import React from 'react';

import { FRONT_END_ROLE, FRONT_END_ROLE_LABEL } from '../../constants/roles';
import ErrorBoundary from '../ErrorBoundary';
import Page from '../Page';
import RoleBar from '../RoleBar';
import ActionButtons from '../ActionButtons';
import Section from '../Section';
import RoleContent from '../RoleContent';
import Fox from '../Characters/Fox';
import QuoteBubble from '../QuoteBubble';
import Character from '../Character';

function FrontEndRolePage() {
  return (
    <ErrorBoundary>
      <Page title={FRONT_END_ROLE_LABEL}>
        <RoleBar label={FRONT_END_ROLE_LABEL} />
        <Section>
          <RoleContent>
            <QuoteBubble />
            <Character>
              <Fox />
            </Character>
          </RoleContent>
        </Section>
        <ActionButtons role={FRONT_END_ROLE} />
      </Page>
    </ErrorBoundary>
  );
}

export default FrontEndRolePage;
