import React from 'react';
import { create } from 'react-test-renderer';

import CopyNotification from '../CopyNotification';

describe('COMPONENT - QuoteBubble CopyNotification', () => {
  it('renders correctly', () => {
    const component = create(<CopyNotification isVisible={true} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
