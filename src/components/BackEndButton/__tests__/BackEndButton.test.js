import React from 'react';
import { create } from 'react-test-renderer';

import BackEndButton from '../BackEndButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

jest.mock('../../Icons', () => ({
  LongArrow: 'LongArrow'
}));

describe('COMPONENT - BackEndButton', () => {
  it('renders correctly', () => {
    const component = create(<BackEndButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
