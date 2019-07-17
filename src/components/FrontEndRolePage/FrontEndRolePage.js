import React from 'react';

import { FRONT_END_ROLE, FRONT_END_ROLE_LABEL } from '../../constants/roles';
import Page from '../Page';
import RoleBar from '../RoleBar';
import ActionButtons from '../ActionButtons';
import Section from '../Section';
import RoleContent from '../RoleContent';
import Fox from '../Characters/Fox';
import QuoteBubble from '../QuoteBubble';
import CharacterWitQuote from './../CharacterWithQuote';

function FrontEndRolePage() {
  return (
    <>
      <Page title={FRONT_END_ROLE_LABEL}>
        <RoleBar label={FRONT_END_ROLE_LABEL} />
        <Section>
          <RoleContent>
            <CharacterWitQuote>
              <QuoteBubble />
              <Fox />
            </CharacterWitQuote>
          </RoleContent>
        </Section>
        <ActionButtons role={FRONT_END_ROLE} />
      </Page>
    </>
  );
}

export default FrontEndRolePage;
