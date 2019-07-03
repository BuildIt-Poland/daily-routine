import React from 'react';
import { create } from 'react-test-renderer';

import Text from '../Text';

describe('COMPONENT - RoleButtons Text', () => {
  it('renders correctly', () => {
    const component = create(<Text />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
