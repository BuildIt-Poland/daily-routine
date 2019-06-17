import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import BackEndRolePage from '../BackEndRolePage';

jest.mock('../../Characters', () => ({
  Robot: 'Robot'
}));
jest.mock('../../RoleActionButton', () => 'RoleActionButton');
jest.mock('../../RoleBar', () => 'RoleBar');
jest.mock('../../QuoteBubble', () => 'QuoteBubble');

describe('COMPONENT - BackEndRolePage', () => {
  it('renders correctly for /backend path', () => {
    const component = create(
      <MemoryRouter initialEntries={['/backend']}>
        <BackEndRolePage />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly for /backend/brag path', () => {
    const component = create(
      <MemoryRouter initialEntries={['/backend/brag']}>
        <BackEndRolePage />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly for /backend/confess path', () => {
    const component = create(
      <MemoryRouter initialEntries={['/backend/confess']}>
        <BackEndRolePage />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
