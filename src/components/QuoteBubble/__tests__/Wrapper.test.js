import React from 'react';
import { create } from 'react-test-renderer';

import Wrapper from '../Wrapper';

jest.mock('../SpeechBubbleArtwork', () => 'SpeechBubbleArtwork');

describe('COMPONENT - QuoteBubble Wrapper', () => {
  it('renders correctly', () => {
    const component = create(<Wrapper calculatedHeight={144} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
