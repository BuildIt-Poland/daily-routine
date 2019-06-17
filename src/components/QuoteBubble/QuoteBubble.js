import React from 'react';

import { SpeechBubble } from '../Icons';
import CopyButton from './CopyButton';
import Wrapper from './Wrapper';
import Quote from './Quote';

const QUOTE =
  'Yesterday I was implementing PUT method for missing RESTful API endpoint with complex database transactions.';

function copyTextFromBubble(text) {
  navigator.clipboard.writeText(text);
}

function QuoteBubble() {
  const onCopy = () => {
    copyTextFromBubble(QUOTE);
  };

  return (
    <Wrapper>
      <Quote>{QUOTE}</Quote>
      <SpeechBubble />
      <CopyButton onCopy={onCopy}>copy</CopyButton>
    </Wrapper>
  );
}

export default QuoteBubble;
