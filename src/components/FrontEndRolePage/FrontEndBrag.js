import React from 'react';
import sample from 'lodash.sample';

import { BRAG } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

import QUOTES from '../../quotes/backEndQuotes';

// TODO Replace with auto-generated message
const QUOTE = sample(QUOTES);

function FrontEndBrag() {
  return (
    <>
      <Fox pose={BRAG} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default FrontEndBrag;
