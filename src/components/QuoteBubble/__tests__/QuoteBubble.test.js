import React from 'react';
import { create } from 'react-test-renderer';

import { THOUGHT } from '../../../constants/speechBubbleVariant';
import QuoteBubble from '../QuoteBubble';

jest.mock('../../Icons', () => ({
  SpeechBubble: 'SpeechBubble'
}));

jest.mock('../CopyButton', () => 'CopyButton');
jest.mock('../Quote', () => 'Quote');
jest.mock('../Wrapper', () => 'Wrapper');
jest.mock('../BubbleTail', () => 'BubbleTail');

describe('COMPONENT - QuoteBubble', () => {
  it('renders correct default quote', () => {
    const component = create(<QuoteBubble />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("doesn't show copy to clipboard button when it's disabled", () => {
    const component = create(<QuoteBubble noCopyToClipboard />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly thought variant of bubble', () => {
    const component = create(<QuoteBubble noCopyToClipboard variant={THOUGHT} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
