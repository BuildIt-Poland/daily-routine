import React from 'react';
import { create } from 'react-test-renderer';

import RightLeg from '../RightLeg';

describe('COMPONENT - Characters Robot RightLeg', () => {
  it('renders correctly', () => {
    const component = create(<RightLeg />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
