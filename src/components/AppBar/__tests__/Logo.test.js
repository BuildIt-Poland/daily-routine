import React from 'react';
import { create } from 'react-test-renderer';
import Logo from '../Logo';
import { LandingPageAnimationContext } from '../../../context/LandingPageAnimationContext';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../Icons', () => ({
  Logo: 'LogoIcon'
}));

describe('COMPONENT - AppBar Logo', () => {
  it('renders correctly', () => {
    const animateAndRedirect = () => {};
    const component = create(
      <LandingPageAnimationContext.Provider value={{ animateAndRedirect }}>
        <Logo />
      </LandingPageAnimationContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
