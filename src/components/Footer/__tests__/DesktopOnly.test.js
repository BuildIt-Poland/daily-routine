import React from 'react';
import { create } from 'react-test-renderer';

import DesktopOnly from '../DesktopOnly';

describe('COMPONENT - Footer DesktopOnly', () => {
  it('renders correctly', () => {
    const component = create(<DesktopOnly />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
