import React from 'react';
import { create } from 'react-test-renderer';

import SugarCat from '.';

describe('COMPONENT - Characters SugarCat', () => {
  it('renders correctly', () => {
    const component = create(<SugarCat />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
