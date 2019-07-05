import React from 'react';
import { create } from 'react-test-renderer';

import FloatingAnimationWrapper from '../FloatingAnimationWrapper';

describe('COMPONENT - Characters Whale FloatingAnimationWrapper', () => {
  it('renders correctly', () => {
    const component = create(<FloatingAnimationWrapper />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
