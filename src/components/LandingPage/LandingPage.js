import React from 'react';

import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import { SugarCat } from '../Characters';
import RoleButtons from '../RoleButtons';
import Content from '../Content';
import Page from './Page';

function LandingPage() {
  return (
    <Page>
      <Section>
        <Content>
          <Headline>Don't know what to say?</Headline>
          <Subheadline>Worry not! Find your perfect scenario for incoming daily.</Subheadline>
          <SugarCat />
        </Content>
      </Section>
      <RoleButtons />
    </Page>
  );
}

export default LandingPage;
