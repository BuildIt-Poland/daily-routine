import React from 'react';
import { create } from 'react-test-renderer';

import GenderProvider from '../GenderProvider';

describe('COMPONENT - GenderProvider', () => {
  it('renders correctly', () => {
    const component = create(<GenderProvider />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
