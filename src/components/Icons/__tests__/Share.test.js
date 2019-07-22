import React from 'react';
import { create } from 'react-test-renderer';

import Share from '../Share';

describe('COMPONENT - Icons Share', () => {
  it('renders correctly', () => {
    const component = create(<Share />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
