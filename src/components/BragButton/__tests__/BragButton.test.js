import React from 'react';
import { create } from 'react-test-renderer';

import BragButton from '../BragButton';

jest.mock('../../Icons', () => ({
  Lightbulb: 'Lightbulb'
}));

describe('COMPONENT - BragButton', () => {
  it('renders correctly', () => {
    const component = create(<BragButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
