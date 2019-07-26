import React from 'react';

import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import { SugarCat } from '../Characters';
import RoleButtons from '../RoleButtons';
import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import Page from './Page';

function LandingPage() {
  return (
    <ErrorBoundary>
      <Page>
        <Section>
          <Content>
            <Headline>Daily Scrum is coming!</Headline>
            <Subheadline>Don't know what to say? Worry not &ndash; we got your back!</Subheadline>
            <SugarCat />
          </Content>
        </Section>
        <RoleButtons />
      </Page>
    </ErrorBoundary>
  );
}

export default LandingPage;
