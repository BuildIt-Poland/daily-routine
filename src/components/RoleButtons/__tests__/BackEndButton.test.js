import React from 'react';
import { create } from 'react-test-renderer';

import BackEndButton from '../BackEndButton';

jest.mock('../../RedirectButton', () => 'RedirectButton');

describe('COMPONENT - RoleButtons BackEndButton', () => {
  it('renders correctly', () => {
    const component = create(<BackEndButton to="/backend">Back End</BackEndButton>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
