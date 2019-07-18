import React from 'react';
import { create } from 'react-test-renderer';

import CopyButton from '../CopyButton';

describe('COMPONENT - QuoteBubble CopyButton', () => {
  it('renders correctly', () => {
    const component = create(<CopyButton valueToCopy="Taylor Swift" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
