import React from 'react';
import { create } from 'react-test-renderer';

import Headline from '../Headline';

describe('COMPONENT - Headline', () => {
  it('renders correctly', () => {
    const component = create(<Headline />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
