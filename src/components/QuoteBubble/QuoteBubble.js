import React from 'react';
import PropTypes from 'prop-types';

import { speechBubbleVariant } from '../../types';
import { SPEECH } from '../../constants/speechBubbleVariant';
import { DEFAULT_QUOTE } from '../../utils/quotesService';
import CopyButton from './CopyButton';
import Wrapper from './Wrapper';
import Quote from './Quote';
import BubbleTail from './BubbleTail';

function QuoteBubble({ variant = SPEECH, noCopyToClipboard = false, quote = DEFAULT_QUOTE }) {
  return (
    <Wrapper>
      <Quote data-testid="quote">{quote}</Quote>
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
