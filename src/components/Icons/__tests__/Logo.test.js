import React from 'react';
import { create } from 'react-test-renderer';

import Logo from '../Logo';

describe('COMPONENT - Icons Logo', () => {
  it('renders correctly', () => {
    const component = create(<Logo />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
