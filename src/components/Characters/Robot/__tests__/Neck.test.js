import React from 'react';
import { create } from 'react-test-renderer';

import Neck from '../Neck';

describe('COMPONENT - Characters Robot Neck', () => {
  it('renders correctly', () => {
    const component = create(<Neck />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
