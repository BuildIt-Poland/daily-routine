import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RoleActionButton from '../RoleActionButton';

afterEach(cleanup);

describe('COMPONENT - RoleActionButton', () => {
  it('renders correct brag button', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/devops']} initialIndex={1}>
        <RoleActionButton variant="brag" to="/devops/brag" />
      </MemoryRouter>
    );

    expect(container.querySelector('a')).toHaveTextContent('Brag');
  });

  it('renders correct confess button', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/devops']} initialIndex={1}>
        <RoleActionButton variant="confess" to="/devops/confess" />
      </MemoryRouter>
    );

    expect(container.querySelector('a')).toHaveTextContent('Confess');
  });
});
