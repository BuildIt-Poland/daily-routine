import React from 'react';
import { create } from 'react-test-renderer';

import SaltGrinder from '../SaltGrinder';

describe('COMPONENT - Icons SaltGrinder', () => {
  it('renders correctly', () => {
    const component = create(<SaltGrinder />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
