import React from 'react';
import { create } from 'react-test-renderer';

import SettingsButton from '../SettingsButton';

describe('COMPONENT - SettingsButton', () => {
  it('renders correctly', () => {
    const component = create(<SettingsButton gender="male" onChange={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
