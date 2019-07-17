import React from 'react';
import { create } from 'react-test-renderer';

import Bubble from '../Bubble';

describe('COMPONENT - QuoteBubble Bubble', () => {
  it('renders correctly', () => {
    const component = create(<Bubble />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
