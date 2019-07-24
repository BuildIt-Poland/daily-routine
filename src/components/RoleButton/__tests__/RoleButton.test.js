import React from 'react';
import { create } from 'react-test-renderer';

import RoleButton from '../RoleButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../Icons', () => ({
  LongArrow: 'LongArrow'
}));

describe('COMPONENT - RoleButton', () => {
  it('renders correctly', () => {
    const component = create(<RoleButton to="/taylorswift">Taylor Swift</RoleButton>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
