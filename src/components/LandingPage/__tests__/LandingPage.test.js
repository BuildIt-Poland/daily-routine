import React from 'react';
import { create } from 'react-test-renderer';

import LandingPage from '../LandingPage';

jest.mock('../../RoleButtons', () => 'RoleButtons');
jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../Characters', () => ({
  SugarCat: 'SugarCat'
}));

describe('COMPONENT - LandingPage', () => {
  it('renders correctly', () => {
    const component = create(<LandingPage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
