import React, { useContext } from 'react';

import GenderContext from '../../context/GenderContext';
import { CONFESS } from '../../constants/roleActions';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

// TODO Replace with auto-generated message
const QUOTE = 'Yesterday I was implementing PUT method for missing RESTful API endpoint.';

function BackEndConfess() {
  const { gender } = useContext(GenderContext);

  return (
    <>
      <Robot pose={CONFESS} gender={gender} />
      <QuoteBubble quote={QUOTE} />
    </>
  );
}

export default BackEndConfess;
