import React from 'react';

import { CONFIDENT } from '../../constants/characterMoods';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function Brag() {
  return (
    <>
      <Robot mood={CONFIDENT} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default Brag;
