import React from 'react';
import PropTypes from 'prop-types';

import extractRoleFromPath from '../../utils/extractRoleFromPath';
import extractActionFromPath from '../../utils/extractActionFromPath';
import extractQuoteIDFromPath from '../../utils/extractQuoteIDFromPath';
import { getQuote } from '../../utils/quotesService';
import { match, speechBubbleVariant } from '../../types';
import { SPEECH } from '../../constants/speechBubbleVariant';
import CopyButton from './CopyButton';
import Wrapper from './Wrapper';
import Quote from './Quote';
import BubbleTail from './BubbleTail';

function QuoteBubble({ variant = SPEECH, noCopyToClipboard = false, match: { url } }) {
  const role = extractRoleFromPath(url);
  const action = extractActionFromPath(url);
  const quoteID = extractQuoteIDFromPath(url);

  const quote = getQuote(role, action, quoteID);

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
  variant: speechBubbleVariant,
  match: match.isRequired
};

export default QuoteBubble;
