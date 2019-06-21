import React from 'react';
import { create } from 'react-test-renderer';

import Header from '../Header';

describe('COMPONENT - SettingsPanel Header', () => {
  it('renders correctly', () => {
    const component = create(<Header />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
