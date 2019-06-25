import React from 'react';

import { CONFIDENT } from '../../constants/characterMoods';
import QuoteBubble from '../QuoteBubble';
import { Fox } from '../Characters/';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function Brag() {
  return (
    <>
      <Fox mood={CONFIDENT} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default Brag;
