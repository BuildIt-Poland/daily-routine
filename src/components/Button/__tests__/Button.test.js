import React from 'react';
import { create } from 'react-test-renderer';

import Button from '../Button';

describe('COMPONENT - Button', () => {
  it('renders correctly', () => {
    const component = create(<Button />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
