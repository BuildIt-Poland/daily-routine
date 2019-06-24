import React from 'react';
import { create } from 'react-test-renderer';

import SidePanel from '../SidePanel';

describe('COMPONENT - SidePanel', () => {
  it('renders correctly when visible', () => {
    const component = create(<SidePanel isVisible={true}>Taylor Swift</SidePanel>);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders nothing if not visible', () => {
    const component = create(<SidePanel isVisible={false}>Taylor Swift</SidePanel>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
