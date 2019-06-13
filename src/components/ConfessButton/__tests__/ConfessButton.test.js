import React from 'react';
import { create } from 'react-test-renderer';

import ConfessButton from '../ConfessButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

jest.mock('../../Icons', () => ({
  SaltGrinder: 'SaltGrinder'
}));

describe('COMPONENT - ConfessButton', () => {
  it('renders correctly', () => {
    const component = create(<ConfessButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
