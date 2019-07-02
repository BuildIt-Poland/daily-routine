import React from 'react';

import { CONFESS } from '../../constants/roleActions';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function BackEndConfess() {
  return (
    <>
      <Robot pose={CONFESS} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default BackEndConfess;
