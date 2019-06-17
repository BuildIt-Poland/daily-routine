import React from 'react';
import { create } from 'react-test-renderer';

import Icon from '../Icon';

jest.mock('../../Icons', () => ({
  LongArrow: 'LongArrow'
}));

describe('COMPONENT - RoleButton Icon', () => {
  it('renders correctly', () => {
    const component = create(<Icon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
