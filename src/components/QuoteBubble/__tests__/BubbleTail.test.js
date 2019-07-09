import React from 'react';
import { create } from 'react-test-renderer';

import { SPEECH, THOUGHT } from '../../../constants/speechBubbleVariant';
import BubbleTail from '../BubbleTail';

describe('COMPONENT - QuoteBubble BubbleTail', () => {
  it("renders correctly when 'speech' variant is passed", () => {
    const component = create(<BubbleTail variant={SPEECH} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when 'thought' variant is passed", () => {
    const component = create(<BubbleTail variant={THOUGHT} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
