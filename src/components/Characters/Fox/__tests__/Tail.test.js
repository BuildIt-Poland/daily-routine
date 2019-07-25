import React from 'react';
import { create } from 'react-test-renderer';

import Tail from '../Tail';

describe('COMPONENT - Characters Fox Tail', () => {
  it('renders correctly', () => {
    const component = create(<Tail />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
