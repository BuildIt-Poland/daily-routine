import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import LandingPage from '../LandingPage';

afterEach(cleanup);

describe('COMPONENT - LandingPage', () => {
  it('renders correct elements', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <LandingPage />
      </MemoryRouter>
    );

    expect(container.querySelector('h1')).toHaveTextContent("Don't know what to say?");
    expect(container.querySelector('svg title')).toHaveTextContent('Sugar cat');
    expect(container.querySelector('nav')).toBeDefined();
  });
});
