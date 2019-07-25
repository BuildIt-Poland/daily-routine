import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { RouteTransitionAnimationContext } from '../../../context/RouteTransitionAnimationContext';
import RouteTransitionAnimation from '../RouteTransitionAnimation';

describe('COMPONENT - RouteTransitionAnimation', () => {
  it('renders correctly when "isAnimating" is  "true"', () => {
    const animateAndRedirect = () => {};
    const stopAnimation = () => {};
    const isAnimating = true;
    const theme = {
      primaryColor: '#fff',
      secondaryColor: '#222'
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect, isAnimating, stopAnimation }}>
          <RouteTransitionAnimation />
        </RouteTransitionAnimationContext.Provider>
      </ThemeProvider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
