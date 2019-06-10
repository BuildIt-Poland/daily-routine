import React from 'react';
import { create } from 'react-test-renderer';

import FrontEndRolePage from '../FrontEndRolePage';

describe('COMPONENT - FrontEndRolePage', () => {
  it('renders correctly', () => {
    const component = create(<FrontEndRolePage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
