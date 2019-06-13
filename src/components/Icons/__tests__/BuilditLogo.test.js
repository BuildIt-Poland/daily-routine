import React from 'react';
import { create } from 'react-test-renderer';

import BuilditLogo from '../BuilditLogo';

describe('COMPONENT - Icons BuilditLogo', () => {
  it('renders correctly', () => {
    const component = create(<BuilditLogo />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
