import React, { useContext } from 'react';

import GenderContext from '../../context/GenderContext';
import { DEFAULT } from '../../constants/roleActions';
import { THOUGHT } from '../../constants/speechBubbleVariant';
import { Robot } from '../Characters';
import QuoteBubble from '../QuoteBubble';

function BackEndDefault() {
  const { gender } = useContext(GenderContext);

  return (
    <>
      <Robot pose={DEFAULT} gender={gender} />
      <QuoteBubble variant={THOUGHT} noCopyToClipboard />
    </>
  );
}

export default BackEndDefault;
