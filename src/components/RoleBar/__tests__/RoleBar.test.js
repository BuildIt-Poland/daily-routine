import React from 'react';
import { create } from 'react-test-renderer';

import RoleBar from '../RoleBar';

jest.mock('../../Icons/Gear', () => 'GearIcon');

describe('COMPONENT - RoleBar', () => {
  it('renders correctly', () => {
    const component = create(<RoleBar label="Frond End Developer" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
