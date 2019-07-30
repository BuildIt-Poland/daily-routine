import React from 'react';
import { create } from 'react-test-renderer';

import Frame from '../Wrapper';

describe('COMPONENT - Characters SugarCat Frame', () => {
  it('renders correctly', () => {
    const component = create(<Frame />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
