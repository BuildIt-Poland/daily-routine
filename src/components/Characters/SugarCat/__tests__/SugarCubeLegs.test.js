import React from 'react';
import { create } from 'react-test-renderer';

import SugarCubeLegs from '../SugarCubeLegs';

describe('COMPONENT - Characters SugarCat SugarCubeLegs', () => {
  it('renders correctly', () => {
    const component = create(<SugarCubeLegs />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
