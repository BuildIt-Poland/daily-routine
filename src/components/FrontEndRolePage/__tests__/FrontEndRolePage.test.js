import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { FRONT_END_ROLE } from '../../../constants/roles';
import FrontEndRolePage from '../FrontEndRolePage';

jest.mock('../../Characters', () => ({
  Fox: 'Fox'
}));
jest.mock('../../ActionButtons', () => 'ActionButtons');
jest.mock('../../RoleBar', () => 'RoleBar');
jest.mock('../../QuoteBubble', () => 'QuoteBubble');
jest.mock('../../Page', () => 'Page');
jest.mock('../../RoleContent', () => 'RoleContent');
jest.mock('../../Section', () => 'Section');
jest.mock('../../Character', () => 'Character');
jest.mock('../../Characters/Fox', () => 'Fox');

describe('COMPONENT - FrontEndRolePage', () => {
  it('renders correctly', () => {
    const component = create(
      <MemoryRouter initialEntries={[`/${FRONT_END_ROLE}`]}>
        <FrontEndRolePage />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
