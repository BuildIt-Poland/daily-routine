import React from 'react';

import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import { SugarCat } from '../Characters';
import BragButton from '../BragButton';
import ConfessButton from '../ConfessButton';

function LandingPage() {
  return (
    <Section>
      <Headline>Don't know what to say?</Headline>
      <Subheadline>Worry not! Find your perfect scenario for incoming daily.</Subheadline>
      <SugarCat />
      <BragButton />
      <ConfessButton />
    </Section>
  );
}

export default LandingPage;
