import React from 'react';
import { create } from 'react-test-renderer';

import Twitter from '../Twitter';

describe('COMPONENT - Icons Twitter', () => {
  it('renders correctly', () => {
    const component = create(<Twitter />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
