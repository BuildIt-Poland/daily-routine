import React from 'react';

import { BRAG } from '../../constants/roleActions';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function BackEndBrag() {
  return (
    <>
      <Robot pose={BRAG} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default BackEndBrag;
