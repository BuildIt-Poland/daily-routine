import React from 'react';
import { create } from 'react-test-renderer';

import Link from '../Link';

describe('COMPONENT - Footer Link', () => {
  it('renders correctly', () => {
    const component = create(<Link />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
