import React from 'react';

import Section from '../Section';
import Headline from '../Headline';
import { Robot } from '../Characters';

function BackEndRolePage() {
  return (
    <Section>
      <Headline>BackEnd</Headline>
      <Robot mood="sad" />
    </Section>
  );
}

export default BackEndRolePage;
