import React from 'react';
import { create } from 'react-test-renderer';

import Logo from '../Logo';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../Icons', () => ({
  Logo: 'LogoIcon'
}));

describe('COMPONENT - AppBar Logo', () => {
  it('renders correctly', () => {
    const component = create(<Logo />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
