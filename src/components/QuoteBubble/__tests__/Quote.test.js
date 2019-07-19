import React from 'react';
import { create } from 'react-test-renderer';

import Quote from '../Quote';

describe('COMPONENT - QuoteBubble Quote', () => {
  it('renders correctly', () => {
    const component = create(<Quote />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
