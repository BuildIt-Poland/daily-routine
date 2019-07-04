import React from 'react';
import { create } from 'react-test-renderer';

import ArrowIcon from '../ArrowIcon';

jest.mock('../../Icons', () => ({
  LongArrow: 'LongArrow'
}));

describe('COMPONENT - RoleButtons ArrowIcon', () => {
  it('renders correctly', () => {
    const component = create(<ArrowIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
