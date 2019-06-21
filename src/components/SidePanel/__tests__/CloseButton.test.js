import React from 'react';
import { create } from 'react-test-renderer';

import CloseButton from '../CloseButton';

jest.mock('../../Icons/Cross', () => 'Cross');

describe('COMPONENT - CloseButton', () => {
  it('renders correctly', () => {
    const component = create(<CloseButton onClick={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
