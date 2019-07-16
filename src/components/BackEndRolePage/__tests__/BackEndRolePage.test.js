import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import BackEndRolePage from '../BackEndRolePage';

jest.mock('../../Characters', () => ({
  Robot: 'Robot'
}));
jest.mock('../../ActionButtons', () => 'ActionButtons');
jest.mock('../../RoleBar', () => 'RoleBar');
jest.mock('../../QuoteBubble', () => 'QuoteBubble');
jest.mock('../../Page', () => 'Page');
jest.mock('../../RoleContent', () => 'RoleContent');
jest.mock('../../Section', () => 'Section');
jest.mock('../../CharacterWithQuote', () => 'CharacterWithQuote');
jest.mock('../../Characters/Robot', () => 'Robot');

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
