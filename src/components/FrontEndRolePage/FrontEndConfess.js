import React from 'react';

import { SAD } from '../../constants/characterMoods';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function FrontEndConfess() {
  return (
    <>
      <Fox mood={SAD} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default FrontEndConfess;
