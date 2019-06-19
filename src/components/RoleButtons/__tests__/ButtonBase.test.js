import React from 'react';
import { create } from 'react-test-renderer';

import ButtonBase from '../ButtonBase';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../Icons', () => ({
  LongArrow: 'LongArrow'
}));

describe('COMPONENT - RoleButtons ButtonBase', () => {
  it('renders correctly', () => {
    const component = create(<ButtonBase to="/taylorswift">Taylor Swift</ButtonBase>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
