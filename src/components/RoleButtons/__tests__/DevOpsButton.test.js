import React from 'react';
import { create } from 'react-test-renderer';

import DevOpsButton from '../DevOpsButton';

jest.mock('../../RedirectButton', () => 'RedirectButton');

describe('COMPONENT - RoleButtons DevOpsButton', () => {
  it('renders correctly', () => {
    const component = create(<DevOpsButton to="/devops">Dev Ops</DevOpsButton>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
