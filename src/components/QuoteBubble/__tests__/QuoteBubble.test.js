import React from 'react';
import { create } from 'react-test-renderer';

import { THOUGHT } from '../../../constants/speechBubbleVariant';
import QuoteBubble from '../QuoteBubble';

jest.mock('../../Icons', () => ({
  SpeechBubble: 'SpeechBubble'
}));

jest.mock('../../../utils/quotesService.js', () => ({
  getQuote: () => "Daily in 5 minutes and I'm still not sure what to say..."
}));

jest.mock('../CopyButton', () => 'CopyButton');
jest.mock('../Quote', () => 'Quote');
jest.mock('../Wrapper', () => 'Wrapper');
jest.mock('../BubbleTail', () => 'BubbleTail');

const MATCH = { url: '/backend/brag/1' };

describe('COMPONENT - QuoteBubble', () => {
  it('renders correct defaults when no props are provieded', () => {
    const component = create(<QuoteBubble match={MATCH} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders custom quote', () => {
    const component = create(<QuoteBubble match={MATCH} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("doesn't show copy to clipboard button when it's disabled", () => {
    const component = create(<QuoteBubble match={MATCH} noCopyToClipboard />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly thought variant of bubble', () => {
    const component = create(<QuoteBubble match={MATCH} noCopyToClipboard variant={THOUGHT} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
