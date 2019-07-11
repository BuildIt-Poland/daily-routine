import React from 'react';
import { render } from '@testing-library/react';

import { LandingPageAnimationProvider, LandingPageAnimationContext } from '../LandingPageAnimationContext';
import { ROOT_PATH } from '../../constants/routes';

describe('COMPONENT - LandingPageAnimationProvider', () => {
  it('should not render child component when "isAnimating" is "false"', () => {
    const { container } = render(
      <LandingPageAnimationProvider>
        <LandingPageAnimationContext.Consumer>
          {({ isAnimating }) => {
            return isAnimating && <p>MockComponent</p>;
          }}
        </LandingPageAnimationContext.Consumer>
      </LandingPageAnimationProvider>
    );

    expect(container.querySelectorAll('p')[0]).not.toBeDefined();
  });

  it('should render child component when animateAndRedirect is called', () => {
    const { container } = render(
      <LandingPageAnimationProvider>
        <LandingPageAnimationContext.Consumer>
          {({ isAnimating, animateAndRedirect }) => {
            animateAndRedirect(ROOT_PATH);
            return isAnimating && <p>MockComponent</p>;
          }}
        </LandingPageAnimationContext.Consumer>
      </LandingPageAnimationProvider>
    );

    expect(container.querySelectorAll('p')[0]).toHaveTextContent('MockComponent');
  });

  it('should not render child component when stopAnimation is called', () => {
    const { container } = render(
      <LandingPageAnimationProvider>
        <LandingPageAnimationContext.Consumer>
          {({ isAnimating, animateAndRedirect, stopAnimation }) => {
            animateAndRedirect(ROOT_PATH);
            stopAnimation();
            return isAnimating && <p>MockComponent</p>;
          }}
        </LandingPageAnimationContext.Consumer>
      </LandingPageAnimationProvider>
    );

    expect(container.querySelectorAll('p')[0]).not.toBeDefined();
  });
});
