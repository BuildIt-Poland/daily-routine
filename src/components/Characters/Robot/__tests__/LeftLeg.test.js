import React from 'react';
import { create } from 'react-test-renderer';

import LeftLeg from '../LeftLeg';

describe('COMPONENT - Characters Robot LeftLeg', () => {
  it('renders correctly', () => {
    const component = create(<LeftLeg />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
