import React from 'react';
import { create } from 'react-test-renderer';

import FrontEndRolePage from '../FrontEndRolePage';
import { MemoryRouter } from 'react-router-dom';
import { FRONT_END_ROLE } from '../../../constants/roles';

jest.mock('../../Characters', () => ({
  Fox: 'Fox'
}));
jest.mock('../../ActionButtons', () => 'ActionButtons');
jest.mock('../../RoleBar', () => 'RoleBar');
jest.mock('../../QuoteBubble', () => 'QuoteBubble');

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
