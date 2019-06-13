import React from 'react';
import { create } from 'react-test-renderer';

import SugarCat from '../SugarCat';

describe('COMPONENT - SugarCat', () => {
  it('renders correctly', () => {
    const component = create(<SugarCat />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
