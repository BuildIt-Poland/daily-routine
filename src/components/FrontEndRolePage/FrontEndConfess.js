import React from 'react';
import sample from 'lodash.sample';

import { CONFESS } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

import QUOTES from '../../quotes/backEndQuotes';

// TODO Replace with auto-generated message
const QUOTE = sample(QUOTES);

function FrontEndConfess() {
  return (
    <>
      <QuoteBubble quote={QUOTE} />
      <Fox pose={CONFESS} />
    </>
  );
}

export default FrontEndConfess;
