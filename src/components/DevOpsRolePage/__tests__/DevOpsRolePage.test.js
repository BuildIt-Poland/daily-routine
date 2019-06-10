import React from 'react';
import { create } from 'react-test-renderer';

import DevOpsRolePage from '../DevOpsRolePage';

describe('COMPONENT - DevOpsRolePage', () => {
  it('renders correctly', () => {
    const component = create(<DevOpsRolePage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
