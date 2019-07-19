import React from 'react';
import { create } from 'react-test-renderer';

import RoleContent from '../RoleContent';

describe('COMPONENT - RoleContent', () => {
  it('renders correctly', () => {
    const component = create(<RoleContent />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
