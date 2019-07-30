import React from 'react';
import { create } from 'react-test-renderer';

import Frame from '../Frame';

describe('COMPONENT - Characters SugarCat Frame', () => {
  it('renders correctly', () => {
    const component = create(<Frame />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
