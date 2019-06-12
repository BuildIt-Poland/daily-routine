import React from 'react';
import { create } from 'react-test-renderer';

import Heart from '../Heart';

describe('COMPONENT - Icons Heart', () => {
  it('renders correctly', () => {
    const component = create(<Heart />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
