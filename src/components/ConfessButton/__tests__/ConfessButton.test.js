import React from 'react';
import { create } from 'react-test-renderer';

import ConfessButton from '../ConfessButton';

describe('COMPONENT - ConfessButton', () => {
  it('renders correctly', () => {
    const component = create(<ConfessButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
