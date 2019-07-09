import React from 'react';

import { BRAG } from '../../constants/roleActions';
import { Whale } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE =
  "Yesterday I was implementing PUT method for missing RESTful API endpoint with complex database transations. Also added experimental fundamental interface. I think we are missing some good ol' lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit...";

function DevOpsBrag() {
  return (
    <>
      <QuoteBubble quote={QUOTE} />
      <Whale pose={BRAG} />
    </>
  );
}

export default DevOpsBrag;
