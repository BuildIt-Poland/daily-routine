import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RoleButtons from '../RoleButtons';

afterEach(cleanup);

describe('COMPONENT - RoleButtons', () => {
  it('renders correct all roles button', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <RoleButtons />
      </MemoryRouter>
    );

    expect(container.querySelector('nav')).toBeDefined();
    expect(container.querySelectorAll('a')[0]).toHaveTextContent('Front End');
    expect(container.querySelectorAll('a')[1]).toHaveTextContent('Back End');
    expect(container.querySelectorAll('a')[2]).toHaveTextContent('Dev Ops');
  });
});
