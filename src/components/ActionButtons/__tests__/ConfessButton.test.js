import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { FRONT_END_ROLE } from '../../../constants/roles';
import ConfessButton from '../ConfessButton';

afterEach(cleanup);

describe('COMPONENT - RoleButton ConfessButton', () => {
  it('should contain proper elements', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <ConfessButton role={FRONT_END_ROLE} />
      </MemoryRouter>
    );

    const confessButton = container.querySelector('a');

    expect(confessButton).toHaveTextContent('Confess my mistake');
    expect(confessButton.contains(confessButton.querySelector('svg'))).toBeDefined();
  });

  it('after a click text should change to `Confess again`', () => {
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
