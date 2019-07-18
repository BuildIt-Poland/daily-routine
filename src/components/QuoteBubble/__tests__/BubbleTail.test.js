import React from 'react';
import { create } from 'react-test-renderer';

import BubbleTail from '../BubbleTail';

jest.mock('../BubbleTailArtwork', () => 'BubbleTailArtwork');

describe('COMPONENT - QuoteBubble BubbleTail', () => {
  it('renders correctly', () => {
    const component = create(<BubbleTail />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
