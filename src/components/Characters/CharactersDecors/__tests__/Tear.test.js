import React from 'react';
import { create } from 'react-test-renderer';

import Tear from '../Tear';

describe('COMPONENT - Characters Tear', () => {
  it('renders correctly', () => {
    const component = create(<Tear />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
