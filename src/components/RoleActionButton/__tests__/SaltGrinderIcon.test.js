import React from 'react';
import { create } from 'react-test-renderer';

import SaltGrinderIcon from '../SaltGrinderIcon';

jest.mock('../../Icons', () => ({
  SaltGrinder: 'SaltGrinder'
}));

describe('COMPONENT - RoleActionButton SaltGrinderIcon', () => {
  it('renders correctly', () => {
    const component = create(<SaltGrinderIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
