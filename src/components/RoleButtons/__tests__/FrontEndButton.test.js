import React from 'react';
import { create } from 'react-test-renderer';

import FrontEndButton from '../FrontEndButton';

jest.mock('../../RedirectButton', () => 'RedirectButton');

describe('COMPONENT - RoleButtons FrontEndButton', () => {
  it('renders correctly', () => {
    const component = create(<FrontEndButton to="/frontend">Front End</FrontEndButton>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
