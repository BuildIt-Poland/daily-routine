import React from 'react';
import { create } from 'react-test-renderer';

import CloseButton from '../CloseButton';

jest.mock('../../Icons', () => ({
  Cross: 'Cross'
}));

describe('COMPONENT - SettingsPanel CloseButton', () => {
  it('renders correctly', () => {
    const component = create(<CloseButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
