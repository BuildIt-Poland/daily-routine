import React from 'react';

import { BRAG } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function FrontEndBrag() {
  return (
    <>
      <Fox pose={BRAG} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default FrontEndBrag;
