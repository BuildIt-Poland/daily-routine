import React from 'react';

import BragButton from '../BragButton';
import ConfessButton from '../ConfessButton';
import RoleBar from '../RoleBar';
import Section from '../Section';
import { Robot } from '../Characters';

function BackEndRolePage() {
  return (
    <>
      <RoleBar />
      <Section>
        <Robot mood="sad" />
        <BragButton />
        <ConfessButton />
      </Section>
    </>
  );
}

export default BackEndRolePage;
