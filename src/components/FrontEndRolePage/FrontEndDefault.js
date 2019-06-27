import React, { useContext } from 'react';

import GenderContext from '../../context/GenderContext';
import { THOUGHT } from '../../constants/speechBubbleVariant';
import { DEFAULT } from '../../constants/roleActions';
import { Fox } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function FrontEndDefault() {
  const { gender } = useContext(GenderContext);

  return (
    <>
      <Fox pose={DEFAULT} gender={gender} />
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
    </>
  );
}

export default FrontEndDefault;
