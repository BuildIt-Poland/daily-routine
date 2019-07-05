import React from 'react';
import { create } from 'react-test-renderer';

import AnimatedWhaleShadow from '../AnimatedWhaleShadow';

describe('COMPONENT - Characters Whale AnimatedWhaleShadow', () => {
  it('renders correctly', () => {
    const component = create(<AnimatedWhaleShadow />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
