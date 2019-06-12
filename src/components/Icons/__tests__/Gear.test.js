import React from 'react';
import { create } from 'react-test-renderer';

import Gear from '../Gear';

describe('COMPONENT - Icons Gear', () => {
  it('renders correctly', () => {
    const component = create(<Gear />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
