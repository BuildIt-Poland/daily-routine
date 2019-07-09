import React from 'react';

import { CONFESS } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function FrontEndConfess() {
  return (
    <>
      <QuoteBubble quote={QUOTE} />
      <Fox pose={CONFESS} />
    </>
  );
}

export default FrontEndConfess;
