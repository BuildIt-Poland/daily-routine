import React from 'react';

import { SAD } from '../../constants/characterMoods';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function DevOpsConfess() {
  return (
    <>
      <Whale mood={SAD} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default DevOpsConfess;
