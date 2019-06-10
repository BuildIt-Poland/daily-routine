import React from 'react';
import { create } from 'react-test-renderer';

import BackEndRolePage from '../BackEndRolePage';

describe('COMPONENT - BackEndRolePage', () => {
  it('renders correctly', () => {
    const component = create(<BackEndRolePage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
