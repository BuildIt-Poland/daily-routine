import React from 'react';
import { create } from 'react-test-renderer';

import Button from '../Button';

describe('COMPONENT - BragButton', () => {
  it('renders correctly', () => {
    const component = create(<Button>Confess</Button>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
