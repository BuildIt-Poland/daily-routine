import React from 'react';

import { CONFESS } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function DevOpsConfess() {
  return (
    <>
      <QuoteBubble quote={QUOTE} />
      <Whale pose={CONFESS} />
    </>
  );
}

export default DevOpsConfess;
