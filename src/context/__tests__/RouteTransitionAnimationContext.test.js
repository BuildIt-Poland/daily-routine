import React from 'react';
import { render } from '@testing-library/react';

import { RouteTransitionAnimationProvider, RouteTransitionAnimationContext } from '../RouteTransitionAnimationContext';
import { ROOT_PATH } from '../../constants/routes';

describe('COMPONENT - RouteTransitionAnimationProvider', () => {
  const history = {
    location: {
      pathname: '/',
      hash: 'ab34b'
    },
    push: jest.fn()
  };

  it('should not render child component when "isAnimating" is "false"', () => {
    const { container } = render(
      <RouteTransitionAnimationProvider history={history}>
        <RouteTransitionAnimationContext.Consumer>
          {({ isAnimating }) => {
            return isAnimating && <p>MockComponent</p>;
          }}
        </RouteTransitionAnimationContext.Consumer>
      </RouteTransitionAnimationProvider>
    );

    expect(container.querySelectorAll('p')[0]).not.toBeDefined();
  });

  it('should render child component when animateAndRedirect is called', () => {
    const { container } = render(
      <RouteTransitionAnimationProvider history={history}>
        <RouteTransitionAnimationContext.Consumer>
          {({ isAnimating, animateAndRedirect }) => {
            animateAndRedirect(ROOT_PATH);
            return isAnimating && <p>MockComponent</p>;
          }}
        </RouteTransitionAnimationContext.Consumer>
      </RouteTransitionAnimationProvider>
    );

    expect(container.querySelectorAll('p')[0]).toHaveTextContent('MockComponent');
  });

  it('should not render child component when stopAnimation is called', () => {
    const { container } = render(
      <RouteTransitionAnimationProvider history={history}>
        <RouteTransitionAnimationContext.Consumer>
          {({ isAnimating, animateAndRedirect, stopAnimation }) => {
            animateAndRedirect(ROOT_PATH);
            stopAnimation();
            return isAnimating && <p>MockComponent</p>;
          }}
        </RouteTransitionAnimationContext.Consumer>
      </RouteTransitionAnimationProvider>
    );

    expect(container.querySelectorAll('p')[0]).not.toBeDefined();
  });
});
