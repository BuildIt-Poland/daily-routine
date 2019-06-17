import React from 'react';
import { create } from 'react-test-renderer';

import BragButton from '../BragButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../LightbulbIcon', () => 'LightbulbIcon');

describe('COMPONENT - RoleButton BragButton', () => {
  it('renders correctly', () => {
    const component = create(<BragButton to="/devops/brag" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
