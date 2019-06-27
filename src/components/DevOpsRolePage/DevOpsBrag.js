import React, { useContext } from 'react';

import GenderContext from '../../context/GenderContext';
import { BRAG } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function DevOpsBrag() {
  const { gender } = useContext(GenderContext);

  return (
    <>
      <Whale pose={BRAG} gender={gender} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default DevOpsBrag;
