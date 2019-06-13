import React from 'react';
import { create } from 'react-test-renderer';

import Subheadline from '../Subheadline';

describe('COMPONENT - Subheadline', () => {
  it('renders correctly', () => {
    const component = create(<Subheadline />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
