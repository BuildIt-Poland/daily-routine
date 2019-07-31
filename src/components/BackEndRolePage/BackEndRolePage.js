import React from 'react';

import { BACK_END_ROLE, BACK_END_ROLE_LABEL } from '../../constants/roles';
import ErrorBoundary from '../ErrorBoundary';
import Page from '../Page';
import ActionButtons from '../ActionButtons';
import RoleBar from '../RoleBar';
import Section from '../Section';
import RoleContent from '../RoleContent';
import Character from '../Character';
import Robot from '../Characters/Robot';
import QuoteBubble from './QuoteBubble';

function BackEndRolePage() {
  return (
    <ErrorBoundary>
      <Page title={BACK_END_ROLE_LABEL}>
        <RoleBar label={BACK_END_ROLE_LABEL} />
        <Section>
          <RoleContent>
            <QuoteBubble />
            <Character>
              <Robot />
            </Character>
          </RoleContent>
        </Section>
        <ActionButtons role={BACK_END_ROLE} />
      </Page>
    </ErrorBoundary>
  );
}

export default BackEndRolePage;
