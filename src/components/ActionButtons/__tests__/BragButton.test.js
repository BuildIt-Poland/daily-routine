import React from 'react';
import { create } from 'react-test-renderer';

import { FRONT_END_ROLE } from '../../../constants/roles';
import BragButton from '../BragButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../LightbulbIcon', () => () => 'LightbulbIcon');

describe('COMPONENT - RoleButton BragButton', () => {
  it('renders correctly', () => {
    const component = create(<BragButton role={FRONT_END_ROLE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
