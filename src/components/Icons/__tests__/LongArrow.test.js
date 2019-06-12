import React from 'react';
import { create } from 'react-test-renderer';

import LongArrow from '../LongArrow';

describe('COMPONENT - Icons LongArrow', () => {
  it('renders correctly', () => {
    const component = create(<LongArrow />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
