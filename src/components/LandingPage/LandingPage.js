import React from 'react';

import { FRONT_END_VARIANT, BACK_END_VARIANT, DEV_OPS_VARIANT } from '../../constants/colourVariants';
import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import { SugarCat } from '../Characters';
import WhideButton from '../WideButton';

function LandingPage() {
  return (
    <Section>
      <Headline>Don't know what to say?</Headline>
      <Subheadline>Worry not! Find your perfect scenario for incoming daily.</Subheadline>
      <SugarCat />
      <WhideButton variant={FRONT_END_VARIANT} to="/frontend">
        Front End Engineer
      </WhideButton>
      <WhideButton variant={BACK_END_VARIANT} to="/backend">
        Back End Developer
      </WhideButton>
      <WhideButton variant={DEV_OPS_VARIANT} to="/devops">
        Dev Ops
      </WhideButton>
    </Section>
  );
}

export default LandingPage;
