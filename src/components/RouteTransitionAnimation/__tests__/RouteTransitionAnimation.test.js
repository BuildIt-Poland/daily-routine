import React from 'react';
import { create } from 'react-test-renderer';

import { RouteTransitionAnimationContext } from '../../../context/RouteTransitionAnimationContext';
import RouteTransitionAnimation from '../RouteTransitionAnimation';

describe('COMPONENT - RouteTransitionAnimation', () => {
  it('renders correctly when "isAnimating" is  "true"', () => {
    const animateAndRedirect = () => {};
    const stopAnimation = () => {};
    const isAnimating = true;

    const component = create(
      <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect, isAnimating, stopAnimation }}>
        <RouteTransitionAnimation />
      </RouteTransitionAnimationContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
