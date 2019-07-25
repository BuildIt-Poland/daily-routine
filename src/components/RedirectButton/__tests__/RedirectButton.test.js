import React from 'react';
import { create } from 'react-test-renderer';

import RedirectButton from '../RedirectButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../Icons', () => ({
  LongArrow: 'LongArrow'
}));

describe('COMPONENT - RedirectButton', () => {
  it('renders correctly', () => {
    const component = create(<RedirectButton to="/taylorswift">Taylor Swift</RedirectButton>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
