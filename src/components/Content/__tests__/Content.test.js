import React from 'react';
import { create } from 'react-test-renderer';

import Content from '../Content';

describe('COMPONENT - Content', () => {
  it('renders correctly', () => {
    const component = create(<Content />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('narrow content renders correctly', () => {
    const component = create(<Content narrow />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
