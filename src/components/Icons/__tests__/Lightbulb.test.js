import React from 'react';
import { create } from 'react-test-renderer';

import Lightbulb from '../Lightbulb';

describe('COMPONENT - Icons Lightbulb', () => {
  it('renders correctly', () => {
    const component = create(<Lightbulb />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
