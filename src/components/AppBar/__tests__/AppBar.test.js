import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AppBar from '../AppBar';
import { LandingPageAnimationContext } from '../../../context/LandingPageAnimationContext';

afterEach(cleanup);

describe('COMPONENT - AppBar', () => {
  it('renders correct logo', () => {
    const animateAndRedirect = () => {};
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <LandingPageAnimationContext.Provider value={{ animateAndRedirect }}>
          <AppBar />
        </LandingPageAnimationContext.Provider>
      </MemoryRouter>
    );

    expect(container.querySelector('p')).toHaveTextContent('Daily scrum absurd answers');
  });
});
