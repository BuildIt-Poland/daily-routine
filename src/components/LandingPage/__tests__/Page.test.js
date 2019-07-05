import React from 'react';
import { create } from 'react-test-renderer';

import Page from '../Page';

describe('COMPONENT - LandingPage Page', () => {
  it('renders correctly', () => {
    const component = create(<Page>Taylor Swift</Page>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
