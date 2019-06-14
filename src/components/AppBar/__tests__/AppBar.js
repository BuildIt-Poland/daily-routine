import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AppBar from '../AppBar';

afterEach(cleanup);

describe('COMPONENT - AppBar', () => {
  it('renders correct logo', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <AppBar />
      </MemoryRouter>
    );

    expect(container.querySelector('p')).toHaveTextContent('Daily scrum absurd answers');
  });
});
