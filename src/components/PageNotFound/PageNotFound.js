import React from 'react';

import { ROOT_PATH } from '../../constants/routes';
import ErrorBoundary from '../ErrorBoundary';
import Section from '../Section';
import Headline from '../Headline';
import Subheadline from '../Subheadline';
import Content from '../Content';
import Navigation from '../Navigation';
import RedirectButton from '../RedirectButton';
import { SugarCat } from '../Characters';
import Page from './Page';
import Wrapper from './Wrapper';

function PageNotFound() {
  return (
    <ErrorBoundary>
      <Page title="404 - Page not found">
        <Section>
          <Content>
            <Headline>404 - Page not found</Headline>
            <Subheadline>You're in the wrong place.</Subheadline>
            <SugarCat />
          </Content>
        </Section>
        <Wrapper>
          <Content>
            <Navigation>
              <RedirectButton to={ROOT_PATH}>Take me home</RedirectButton>
            </Navigation>
          </Content>
        </Wrapper>
      </Page>
    </ErrorBoundary>
  );
}

export default PageNotFound;
