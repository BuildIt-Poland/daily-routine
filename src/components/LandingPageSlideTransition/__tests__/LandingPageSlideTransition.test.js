import React from 'react';
import { create } from 'react-test-renderer';

import { LandingPageAnimationContext } from '../../../context/LandingPageAnimationContext';
import LandingPageSlideTransition from '../LandingPageSlideTransition';

describe('COMPONENT - LandingPageSlideTransition', () => {
  it('renders correctly when "isAnimating" is  "true"', () => {
    const animateAndRedirect = () => {};
    const stopAnimation = () => {};
    const isAnimating = true;
    const component = create(
      <LandingPageAnimationContext.Provider value={{ animateAndRedirect, isAnimating, stopAnimation }}>
        <LandingPageSlideTransition />
      </LandingPageAnimationContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
