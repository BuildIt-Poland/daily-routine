import React from 'react';
import { create } from 'react-test-renderer';

import QuoteBubble from '../QuoteBubble';

describe('COMPONENT - Page QuoteBubble', () => {
  it('renders correctly', () => {
    const component = create(<QuoteBubble />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
