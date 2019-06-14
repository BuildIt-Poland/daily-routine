import React from 'react';

import { BRAG_VARIANT, CONFESS_VARIANT } from '../../constants/coloursVariants';
import WideButton from '../WideButton';
import RoleBar from '../RoleBar';
import Section from '../Section';
import { Robot } from '../Characters';

function BackEndRolePage() {
  return (
    <>
      <RoleBar />
      <Section>
        <Robot mood="sad" />
        <WideButton variant={BRAG_VARIANT}>Brag about my achievements</WideButton>
        <WideButton variant={CONFESS_VARIANT}>Confess my mistake</WideButton>
      </Section>
    </>
  );
}

export default BackEndRolePage;
