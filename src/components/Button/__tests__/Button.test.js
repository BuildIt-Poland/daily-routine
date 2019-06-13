import React from 'react';
import { create } from 'react-test-renderer';

import Button from '../Button';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - BragButton', () => {
  it('renders Link if to prop is provided', () => {
    const component = create(<Button to="/frontend" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render button if onClick handler is provided', () => {
    const component = create(<Button onClick={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
