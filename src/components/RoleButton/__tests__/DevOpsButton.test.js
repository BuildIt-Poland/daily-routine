import React from 'react';
import { create } from 'react-test-renderer';

import DevOpsButton from '../DevOpsButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../Icons', () => ({
  LongArrow: 'LongArrow'
}));

describe('COMPONENT - RoleButton DevOpsButton', () => {
  it('renders correctly', () => {
    const component = create(<DevOpsButton to="/devops">Dev Ops</DevOpsButton>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
