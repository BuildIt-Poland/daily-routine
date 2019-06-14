import React from 'react';
import { create } from 'react-test-renderer';

import BackEndRolePage from '../BackEndRolePage';

jest.mock('../../Characters', () => ({
  Robot: 'Robot'
}));

describe('COMPONENT - BackEndRolePage', () => {
  it('renders correctly', () => {
    const component = create(<BackEndRolePage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
