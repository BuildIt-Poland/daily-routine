import React from 'react';
import { create } from 'react-test-renderer';

import { LandingPageAnimationProvider } from '../LandingPageAnimationContext';

describe('COMPONENT - LandingPageAnimationProvider', () => {
  it('renders correctly when "isAnimating" is  "true"', () => {
    const animateAndRedirect = () => {};
    const isAnimating = true;
    const component = create(<LandingPageAnimationProvider></LandingPageAnimationProvider>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
