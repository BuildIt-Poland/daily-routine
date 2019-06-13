import React from 'react';

import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import { SugarCat } from '../Characters';

function LandingPage() {
  return (
    <Section>
      <Headline>Don't know what to say?</Headline>
      <Subheadline>Find your perfect scenario for incoming daily.</Subheadline>
      <SugarCat />
    </Section>
  );
}

export default LandingPage;
