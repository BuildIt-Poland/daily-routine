import React from 'react';
import { create } from 'react-test-renderer';

import Wrapper from '../Wrapper';

describe('COMPONENT - AppBar Wrapper', () => {
  it('renders correctly', () => {
    const component = create(<Wrapper />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
