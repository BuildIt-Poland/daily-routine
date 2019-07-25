import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AppBar from '../AppBar';
import { RouteTransitionAnimationContext } from '../../../context/RouteTransitionAnimationContext';

afterEach(cleanup);

describe('COMPONENT - AppBar', () => {
  it('renders correct logo', () => {
    const animateAndRedirect = () => {};
    const mockLocation = {
      key: 'utwyk7',
      pathname: '/'
    };
    const { container } = render(
      <MemoryRouter initialEntries={[mockLocation]} initialIndex={1}>
        <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect }}>
          <AppBar />
        </RouteTransitionAnimationContext.Provider>
      </MemoryRouter>
    );

    expect(container.querySelector('p')).toHaveTextContent('Daily scrum absurd answers');
  });
});
