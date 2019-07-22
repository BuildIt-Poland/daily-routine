import React from 'react';
import { create } from 'react-test-renderer';

import Facebook from '../Facebook';

describe('COMPONENT - Icons Facebook', () => {
  it('renders correctly', () => {
    const component = create(<Facebook />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
