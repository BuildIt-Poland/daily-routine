import React from 'react';

import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import { SugarCat } from '../Characters';
import RoleButton from '../RoleButton';

function LandingPage() {
  return (
    <article>
      <Section>
        <Headline>Don't know what to say?</Headline>
        <Subheadline>Worry not! Find your perfect scenario for incoming daily.</Subheadline>
        <SugarCat />
      </Section>
      <Section>
        <Subheadline>Pick your role!</Subheadline>
        <nav>
          <RoleButton variant={FRONT_END_ROLE} />
          <RoleButton variant={BACK_END_ROLE} />
          <RoleButton variant={DEV_OPS_ROLE} />
        </nav>
      </Section>
    </article>
  );
}

export default LandingPage;
