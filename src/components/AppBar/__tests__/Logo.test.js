import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Logo from '../Logo';
import { LandingPageAnimationContext } from '../../../context/LandingPageAnimationContext';

jest.mock('../../Icons', () => ({
  Logo: 'LogoIcon'
}));

describe('COMPONENT - AppBar Logo', () => {
  it('renders correctly', () => {
    const animateAndRedirect = () => {};

    const component = create(
      <LandingPageAnimationContext.Provider value={{ animateAndRedirect }}>
        <MemoryRouter initialEntries={['/']}>
          <Logo />
        </MemoryRouter>
      </LandingPageAnimationContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
