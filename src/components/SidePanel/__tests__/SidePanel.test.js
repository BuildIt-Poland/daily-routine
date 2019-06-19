import React from 'react';
import { create } from 'react-test-renderer';

import SidePanel from '../SidePanel';

jest.mock('../../Icons/Cross', () => 'Cross');

describe('COMPONENT - SidePanel', () => {
  it('renders correctly', () => {
    const component = create(<SidePanel onClose={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
