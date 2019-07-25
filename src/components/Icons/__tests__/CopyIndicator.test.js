import React from 'react';
import { create } from 'react-test-renderer';

import CopyIndicator from '../CopyIndicator';

describe('COMPONENT - Icons CopyIndicator', () => {
  it('renders correctly', () => {
    const component = create(<CopyIndicator />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
