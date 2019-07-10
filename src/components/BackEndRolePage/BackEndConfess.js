import React from 'react';
import sample from 'lodash.sample';

import { CONFESS } from '../../constants/roleActions';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

import QUOTES from '../../quotes/backEndQuotes';

// TODO Replace with auto-generated message
const QUOTE = sample(QUOTES);

function BackEndConfess() {
  return (
    <>
      <QuoteBubble quote={QUOTE} />
      <Robot pose={CONFESS} />
    </>
  );
}

export default BackEndConfess;
