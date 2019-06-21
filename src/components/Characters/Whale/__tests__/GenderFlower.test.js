import React from 'react';
import { create } from 'react-test-renderer';

import GenderFlower from '../GenderFlower';

jest.mock('../../GenderFlower', () => 'GenderFlower');

describe('COMPONENT - Characters Whale GenderFlower', () => {
  it('renders correctly', () => {
    const component = create(<GenderFlower />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
