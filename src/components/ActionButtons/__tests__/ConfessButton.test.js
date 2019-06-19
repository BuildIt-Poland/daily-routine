import React from 'react';
import { create } from 'react-test-renderer';

import { FRONT_END_ROLE } from '../../../constants/roles';
import ConfessButton from '../ConfessButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../ConfessButton', () => 'ConfessButton');

describe('COMPONENT - RoleButton ConfessButton', () => {
  it('renders correctly', () => {
    const component = create(<ConfessButton role={FRONT_END_ROLE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
