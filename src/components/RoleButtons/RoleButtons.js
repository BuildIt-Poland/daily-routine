// Set of links to various roles

import React from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Content from '../Content';
import Headline from '../Headline';
import Navigation from '../Navigation';
import Wrapper from './Wrapper';
import FrontEndButton from './FrontEndButton';
import BackEndButton from './BackEndButton';
import DevOpsButton from './DevOpsButton';

function RoleButtons() {
  return (
    <ErrorBoundary>
      <Wrapper>
        <Content>
          <Headline>Pick your role!</Headline>
          <Navigation>
            <FrontEndButton />
            <BackEndButton />
            <DevOpsButton />
          </Navigation>
        </Content>
      </Wrapper>
    </ErrorBoundary>
  );
}

export default RoleButtons;
