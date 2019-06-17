import React from 'react';
import { create } from 'react-test-renderer';

import DevOpsRolePage from '../DevOpsRolePage';

jest.mock('../../Characters', () => ({
  Whale: 'Whale'
}));

describe('COMPONENT - DevOpsRolePage', () => {
  it('renders correctly', () => {
    const component = create(<DevOpsRolePage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
