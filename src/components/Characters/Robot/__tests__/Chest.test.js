import React from 'react';
import { create } from 'react-test-renderer';

import Chest from '../Chest';

describe('COMPONENT - Characters Robot Chest', () => {
  it('renders correctly', () => {
    const component = create(<Chest />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
