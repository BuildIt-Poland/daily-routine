import React from 'react';

import { CONFIDENT } from '../../constants/characterMoods';
import { Robot } from '../Characters';

function Brag() {
  return <Robot mood={CONFIDENT} />;
}

export default Brag;
