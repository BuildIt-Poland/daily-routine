// TODO Figure out how to test it a bit more in depth @blurbyte

import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import QuoteBubble from '../QuoteBubble';

jest.mock('../../Icons', () => ({
  SpeechBubble: 'SpeechBubble'
}));
jest.mock('../CopyButton', () => 'CopyButton');
jest.mock('../Quote', () => 'Quote');
jest.mock('../Wrapper', () => 'Wrapper');
jest.mock('../BubbleTail', () => 'BubbleTail');
jest.mock('../SpeechBubbleArtwork', () => 'SpeechBubbleArtwork');

describe('COMPONENT - QuoteBubble', () => {
  it('renders correctly', () => {
    const component = create(
      <MemoryRouter initialEntries={['/frontend']}>
        <QuoteBubble />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
