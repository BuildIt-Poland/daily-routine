import React from 'react';
import PropTypes from 'prop-types';

import { speechBubbleVariant } from '../../types';
import { SPEECH } from '../../constants/speechBubbleVariant';
import CopyButton from './CopyButton';
import Wrapper from './Wrapper';
import Quote from './Quote';
import BubbleTail from './BubbleTail';

const DEFAULT_QUOTE = "Daily in 5 minutes and I'm still not sure what to say...";

function QuoteBubble({ quote = DEFAULT_QUOTE, variant = SPEECH, noCopyToClipboard = false }) {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <BubbleTail variant={variant} />
      {!noCopyToClipboard && <CopyButton valueToCopy={quote} />}
    </Wrapper>
  );
}

QuoteBubble.propTypes = {
  quote: PropTypes.string,
  noCopyToClipboard: PropTypes.bool,
  variant: speechBubbleVariant
};

export default QuoteBubble;
