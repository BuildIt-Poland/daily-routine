import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../Header';

afterEach(cleanup);

describe('COMPONENT - Header', () => {
  it('renders correct logo', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <Header />
      </MemoryRouter>
    );

    expect(container.querySelector('p')).toHaveTextContent('Daily scrum absurd answers');
  });
});
