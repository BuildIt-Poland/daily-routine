import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { FRONT_END_ROLE } from '../../../constants/roles';
import ConfessButton from '../ConfessButton';

afterEach(cleanup);

describe('COMPONENT - RoleButton ConfessButton', () => {
  it('should contain text `Confess my mistake`', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <ConfessButton role={FRONT_END_ROLE} />
      </MemoryRouter>
    );

    expect(container.querySelector('a')).toHaveTextContent('Confess my mistake');
  });

  it('should contain `svg` element', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <ConfessButton role={FRONT_END_ROLE} />
      </MemoryRouter>
    );

    expect(container.contains(container.querySelector('svg'))).toBe(true);
  });

  it('after once click should change text to `Confess again`', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <ConfessButton role={FRONT_END_ROLE} />
      </MemoryRouter>
    );

    const confessButton = container.querySelector('a');

    fireEvent.click(confessButton);

    expect(confessButton).toHaveTextContent('Confess again');
  });
});
