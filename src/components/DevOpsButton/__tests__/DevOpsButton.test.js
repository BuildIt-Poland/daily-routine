import React from 'react';
import { create } from 'react-test-renderer';

import DevOpsButton from '../DevOpsButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

jest.mock('../../Icons', () => ({
  LongArrow: 'LongArrow'
}));

describe('COMPONENT - DevOpsButton', () => {
  it('renders correctly', () => {
    const component = create(<DevOpsButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
