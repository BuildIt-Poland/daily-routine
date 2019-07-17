import React from 'react';

import { DEV_OPS_ROLE, DEV_OPS_ROLE_LABEL } from '../../constants/roles';
import Page from '../Page';
import ActionButtons from '../ActionButtons';
import RoleBar from '../RoleBar';
import Section from '../Section';
import RoleContent from '../RoleContent';
import CharacterWitQuote from '../CharacterWithQuote/CharacterWithQuote';
import Whale from '../Characters/Whale';
import QuoteBubble from '../QuoteBubble';

function DevOpsRolePage() {
  return (
    <>
      <Page title={DEV_OPS_ROLE_LABEL}>
        <RoleBar label={DEV_OPS_ROLE_LABEL} />
        <Section>
          <RoleContent>
            <CharacterWitQuote>
              <QuoteBubble />
              <Whale />
            </CharacterWitQuote>
          </RoleContent>
        </Section>
        <ActionButtons role={DEV_OPS_ROLE} />
      </Page>
    </>
  );
}

export default DevOpsRolePage;
