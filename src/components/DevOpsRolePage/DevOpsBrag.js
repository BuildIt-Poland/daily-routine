import React from 'react';
import sample from 'lodash.sample';

import { BRAG } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

import QUOTES from '../../quotes/backEndQuotes';

// TODO Replace with auto-generated message
const QUOTE = sample(QUOTES);

function DevOpsBrag() {
  return (
    <>
      <QuoteBubble quote={QUOTE} />
      <Whale pose={BRAG} />
    </>
  );
}

export default DevOpsBrag;
