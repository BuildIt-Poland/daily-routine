import React from 'react';
import { create } from 'react-test-renderer';

import WideButton from '../WideButton';

describe('COMPONENT - WideButton', () => {
  it('renders correctly', () => {
    const component = create(<WideButton>Confess</WideButton>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
