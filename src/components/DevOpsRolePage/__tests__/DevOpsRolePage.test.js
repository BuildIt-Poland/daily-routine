import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import DevOpsRolePage from '../DevOpsRolePage';

jest.mock('../../Characters', () => ({
  Whale: 'Whale'
}));
jest.mock('../../ActionButtons', () => 'ActionButtons');
jest.mock('../../RoleBar', () => 'RoleBar');
jest.mock('../../QuoteBubble', () => 'QuoteBubble');
jest.mock('../../Page', () => 'Page');
jest.mock('../../RoleContent', () => 'RoleContent');
jest.mock('../../Section', () => 'Section');

describe('COMPONENT - DevOpsRolePage', () => {
  it('renders correctly for /devops path', () => {
    const component = create(
      <MemoryRouter initialEntries={['/devops']}>
        <DevOpsRolePage />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly for /devops/brag path', () => {
    const component = create(
      <MemoryRouter initialEntries={['/devops/brag']}>
        <DevOpsRolePage />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly for /devops/confess path', () => {
    const component = create(
      <MemoryRouter initialEntries={['/devops/confess']}>
        <DevOpsRolePage />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
