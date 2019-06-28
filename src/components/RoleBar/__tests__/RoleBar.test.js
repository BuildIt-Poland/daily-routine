import React from 'react';
import { create } from 'react-test-renderer';

import RoleBar from '../RoleBar';
import { FRONT_END_ROLE_LABEL } from '../../../constants/roles';

jest.mock('../../Icons/Gear', () => 'GearIcon');

describe('COMPONENT - RoleBar', () => {
  it('renders correctly', () => {
    const component = create(<RoleBar label={FRONT_END_ROLE_LABEL} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
