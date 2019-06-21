import React from 'react';
import { create } from 'react-test-renderer';

import GearButton from '../GearButton';

jest.mock('../../Icons', () => ({
  Gear: 'Gear'
}));

describe('COMPONENT - SettingsTrigger GearButton', () => {
  it('renders correctly', () => {
    const component = create(<GearButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
