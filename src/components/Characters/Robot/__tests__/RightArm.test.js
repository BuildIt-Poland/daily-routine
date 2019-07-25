import React from 'react';
import { create } from 'react-test-renderer';

import RightArm from '../RightArm';

describe('COMPONENT - Characters Robot RightArm', () => {
  it('renders correctly', () => {
    const component = create(<RightArm />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
