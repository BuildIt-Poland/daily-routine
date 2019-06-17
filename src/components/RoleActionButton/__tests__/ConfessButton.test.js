import React from 'react';
import { create } from 'react-test-renderer';

import ConfessButton from '../ConfessButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../ConfessButton', () => 'ConfessButton');

describe('COMPONENT - RoleButton ConfessButton', () => {
  it('renders correctly', () => {
    const component = create(<ConfessButton to="/devops/brag" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
