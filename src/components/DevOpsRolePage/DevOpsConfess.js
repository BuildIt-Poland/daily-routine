import React from 'react';

import { CONFESS } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function DevOpsConfess() {
  return (
    <>
      <Whale pose={CONFESS} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default DevOpsConfess;
