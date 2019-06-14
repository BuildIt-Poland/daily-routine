import React from 'react';
import { create } from 'react-test-renderer';

import WideButton from '../WideButton';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - BragButton', () => {
  it('renders Link if to prop is provided', () => {
    const component = create(<WideButton variant="frontend" to="/frontend" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render button if onClick is provided', () => {
    const component = create(<WideButton variant="frontend" onClick={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
