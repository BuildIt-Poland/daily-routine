import React from 'react';
import { create } from 'react-test-renderer';

import { SPEECH, THOUGHT } from '../../../constants/speechBubbleVariant';
import BubbleTailArtwork from '../BubbleTailArtwork';

describe('COMPONENT - QuoteBubble BubbleTailArtwork', () => {
  it("renders correctly when 'speech' variant is passed", () => {
    const component = create(<BubbleTailArtwork variant={SPEECH} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when 'thought' variant is passed", () => {
    const component = create(<BubbleTailArtwork variant={THOUGHT} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
