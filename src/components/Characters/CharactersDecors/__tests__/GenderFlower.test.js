import React from 'react';
import { create } from 'react-test-renderer';

import GenderFlower from '../GenderFlower';

describe('COMPONENT - Characters GenderFlower', () => {
  it('renders correctly', () => {
    const component = create(<GenderFlower />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
