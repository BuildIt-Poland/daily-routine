import React from 'react';
import { create } from 'react-test-renderer';

import LeftArm from '../LeftArm';

describe('COMPONENT - Characters Robot LeftArm', () => {
  it('renders correctly', () => {
    const component = create(<LeftArm />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
