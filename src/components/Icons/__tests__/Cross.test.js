import React from 'react';
import { create } from 'react-test-renderer';

import Cross from '../Cross';

describe('COMPONENT - Icons Cross', () => {
  it('renders correctly', () => {
    const component = create(<Cross />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
