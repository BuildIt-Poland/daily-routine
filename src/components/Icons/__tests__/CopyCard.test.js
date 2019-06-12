import React from 'react';
import { create } from 'react-test-renderer';

import CopyCard from '../CopyCards';

describe('COMPONENT - Icons CopyCard', () => {
  it('renders correctly', () => {
    const component = create(<CopyCard />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
