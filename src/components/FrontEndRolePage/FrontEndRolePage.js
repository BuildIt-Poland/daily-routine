import React from 'react';

import { SAD } from '../../constants/characterMoods';
import Section from '../Section';
import Headline from '../Headline';
import { Fox } from '../Characters';

function FrontEndRolePage() {
  return (
    <Section>
      <Headline>FrontEnd</Headline>
      <Fox mood={SAD} />
    </Section>
  );
}

export default FrontEndRolePage;
