import React from 'react';

import { BACK_END_ROLE, BACK_END_ROLE_LABEL } from '../../constants/roles';
import Page from '../Page';
import ActionButtons from '../ActionButtons';
import RoleBar from '../RoleBar';
import Section from '../Section';
import RoleContent from '../RoleContent';
import CharacterWitQuote from '../CharacterWithQuote/CharacterWithQuote';
import Robot from '../Characters/Robot';
import QuoteBubble from '../QuoteBubble';

function BackEndRolePage() {
  return (
    <>
      <Page title={BACK_END_ROLE_LABEL}>
        <RoleBar label={BACK_END_ROLE_LABEL} />
        <Section>
          <RoleContent>
            <CharacterWitQuote>
              <QuoteBubble />
              <Robot />
            </CharacterWitQuote>
          </RoleContent>
        </Section>
        <ActionButtons role={BACK_END_ROLE} />
      </Page>
    </>
  );
}

export default BackEndRolePage;
