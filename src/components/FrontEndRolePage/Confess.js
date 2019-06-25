import React from 'react';

import { SAD } from '../../constants/characterMoods';
import QuoteBubble from '../QuoteBubble';
import { Fox } from '../Characters/';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function Confess() {
  return (
    <>
      <Fox mood={SAD} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default Confess;
