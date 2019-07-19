import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { FRONT_END_ROLE } from '../../../constants/roles';
import BragButton from '../BragButton';

afterEach(cleanup);

describe('COMPONENT - RoleButton BragButton', () => {
  it('should contain proper elements', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <BragButton quoteID={'1'} role={FRONT_END_ROLE} />
      </MemoryRouter>
    );

    const bragButton = container.querySelector('a');

    expect(bragButton).toHaveTextContent('Brag about my efforts');
    expect(bragButton.contains(bragButton.querySelector('svg'))).toBeDefined();
  });

  it('after a click text should change to `Brag more`', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <BragButton quoteID={'1'} role={FRONT_END_ROLE} />
      </MemoryRouter>
    );

    const bragButton = container.querySelector('a');

    fireEvent.click(bragButton);

    expect(bragButton).toHaveTextContent('Brag more');
  });
});
