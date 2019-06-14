import React from 'react';
import { create } from 'react-test-renderer';

import BackEndRolePage from '../BackEndRolePage';

jest.mock('../../Characters', () => ({
  Robot: 'Robot'
}));
jest.mock('../../BragButton', () => 'BragButton');
jest.mock('../../ConfessButton', () => 'ConfessButton');

describe('COMPONENT - BackEndRolePage', () => {
  it('renders correctly', () => {
    const component = create(<BackEndRolePage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
