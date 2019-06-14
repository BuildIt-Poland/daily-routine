import React from 'react';
import { create } from 'react-test-renderer';

import RoleBar from '../RoleBar';

describe('COMPONENT - RoleBar', () => {
  it('renders correctly', () => {
    const component = create(<RoleBar />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
