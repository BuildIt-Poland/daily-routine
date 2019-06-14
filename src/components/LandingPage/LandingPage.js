import React from 'react';

import { FRONT_END_VARIANT, BACK_END_VARIANT, DEV_OPS_VARIANT } from '../../constants/coloursVariants';
import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import { SugarCat } from '../Characters';
import WideButton from '../WideButton';

function LandingPage() {
  return (
    <Section>
      <Headline>Don't know what to say?</Headline>
      <Subheadline>Worry not! Find your perfect scenario for incoming daily.</Subheadline>
      <SugarCat />
      <WideButton variant={FRONT_END_VARIANT} to="/frontend">
        Front End Engineer
      </WideButton>
      <WideButton variant={BACK_END_VARIANT} to="/backend">
        Back End Developer
      </WideButton>
      <WideButton variant={DEV_OPS_VARIANT} to="/devops">
        Dev Ops
      </WideButton>
    </Section>
  );
}

export default LandingPage;
