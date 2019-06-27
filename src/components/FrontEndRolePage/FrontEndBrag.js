import React, { useContext } from 'react';

import GenderContext from '../../context/GenderContext';
import { BRAG } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function FrontEndBrag() {
  const { gender } = useContext(GenderContext);

  return (
    <>
      <Fox pose={BRAG} gender={gender} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default FrontEndBrag;
