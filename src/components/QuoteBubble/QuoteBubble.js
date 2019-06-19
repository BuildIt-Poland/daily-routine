import React from 'react';
import PropTypes from 'prop-types';

import { SpeechBubble } from '../Icons';
import CopyButton from './CopyButton';
import Wrapper from './Wrapper';
import Quote from './Quote';

function copyTextFromBubble(text) {
  navigator.clipboard.writeText(text);
}

function QuoteBubble({ quote }) {
  const onCopy = () => {
    copyTextFromBubble(quote);
  };

  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <SpeechBubble />
      <CopyButton onCopy={onCopy} />
    </Wrapper>
  );
}

QuoteBubble.propTypes = {
  quote: PropTypes.string.isRequired
};

export default QuoteBubble;
