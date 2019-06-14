import React from 'react';
import { create } from 'react-test-renderer';

import QuoteBubble from '../QuoteBubble';

jest.mock('../../Icons', () => ({
  SpeechBubble: 'SpeechBubble',
  CopyCards: 'CopyCards'
}));

describe('COMPONENT - QuoteBubble', () => {
  it('renders correctly', () => {
    const component = create(<QuoteBubble />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
