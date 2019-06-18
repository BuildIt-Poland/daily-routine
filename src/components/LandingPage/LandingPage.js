import React from 'react';

import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import { SugarCat } from '../Characters';
import RoleButtons from '../RoleButtons';

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
        <RoleButtons />
      </Section>
    </article>
  );
}

export default LandingPage;
