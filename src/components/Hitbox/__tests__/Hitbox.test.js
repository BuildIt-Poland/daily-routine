import React from 'react';
import { create } from 'react-test-renderer';

import Hitbox from '../Hitbox';

describe('COMPONENT - Hitbox', () => {
  it('renders correctly', () => {
    const component = create(<Hitbox />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
