import React from 'react';

import { CONFIDENT } from '../../constants/characterMoods';
import { Whale } from '../Characters';

function Brag() {
  return <Whale mood={CONFIDENT} />;
}

export default Brag;
