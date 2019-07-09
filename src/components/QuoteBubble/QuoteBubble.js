import React from 'react';
import PropTypes from 'prop-types';

import { SPEECH } from '../../constants/speechBubbleVariant';
import { speechBubbleVariant } from '../../types';
import { SpeechBubble } from '../Icons';
import CopyButton from './CopyButton';
import Wrapper from './Wrapper';
import Quote from './Quote';

const DEFAULT_QUOTE = "Daily in 5 minutes and I'm still not sure what to say...";

function QuoteBubble({ quote = DEFAULT_QUOTE, variant = SPEECH, noCopyToClipboard = false }) {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <SpeechBubble variant={variant} />
      {!noCopyToClipboard && <CopyButton valueToCopy={quote} />}
    </Wrapper>
  );
}

QuoteBubble.propTypes = {
  quote: PropTypes.string,
  variant: speechBubbleVariant,
  noCopyToClipboard: PropTypes.bool
};

export default QuoteBubble;
