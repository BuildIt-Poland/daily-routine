import React from 'react';
import sample from 'lodash.sample';

import { BRAG } from '../../constants/roleActions';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

import QUOTES from '../../quotes/backEndQuotes';

// TODO Replace with auto-generated message
const QUOTE = sample(QUOTES);

function BackEndBrag() {
  return (
    <>
      <Robot pose={BRAG} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default BackEndBrag;
