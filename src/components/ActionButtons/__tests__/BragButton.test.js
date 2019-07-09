import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { FRONT_END_ROLE } from '../../../constants/roles';
import BragButton from '../BragButton';

afterEach(cleanup);

describe('COMPONENT - RoleButton BragButton', () => {
  it('should contain text `Brag about my efforts`', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <BragButton role={FRONT_END_ROLE} />
        tl goo
      </MemoryRouter>
    );

    expect(container.querySelector('a')).toHaveTextContent('Brag about my efforts');
  });

  it('should contain `svg` element', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <BragButton role={FRONT_END_ROLE} />
      </MemoryRouter>
    );

    expect(container.contains(container.querySelector('svg'))).toBe(true);
  });

  it('after once click should change text to `Brag more`', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <BragButton role={FRONT_END_ROLE} />
      </MemoryRouter>
    );

    const bragButton = container.querySelector('a');

    fireEvent.click(bragButton);

    expect(bragButton).toHaveTextContent('Brag more');
  });
});
