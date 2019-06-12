import React from 'react';
import { create } from 'react-test-renderer';

import Layout from '../Layout';

describe('COMPONENT - Header Layout', () => {
  it('renders correctly', () => {
    const component = create(<Layout />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
