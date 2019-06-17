import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RoleButton from '../RoleButton';

afterEach(cleanup);

describe('COMPONENT - RoleButton', () => {
  it('renders correct Front End button', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <RoleButton variant="frontend" />
      </MemoryRouter>
    );

    expect(container.querySelector('a')).toHaveTextContent('Front End');
  });

  it('renders correct Back End button', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <RoleButton variant="backend" />
      </MemoryRouter>
    );

    expect(container.querySelector('a')).toHaveTextContent('Back End');
  });

  it('renders correct Dev Ops button', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <RoleButton variant="devops" />
      </MemoryRouter>
    );

    expect(container.querySelector('a')).toHaveTextContent('Dev Ops');
  });
});
