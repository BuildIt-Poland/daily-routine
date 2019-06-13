import React from 'react';
import { create } from 'react-test-renderer';

import FrontEndButton from '../FrontEndButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

jest.mock('../../Icons', () => ({
  LongArrow: 'LongArrow'
}));

describe('COMPONENT - FrontEndButton', () => {
  it('renders correctly', () => {
    const component = create(<FrontEndButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
