import React from 'react';

import { SAD } from '../../constants/characterMoods';
import { Robot } from '../Characters';

function Confess() {
  return <Robot mood={SAD} />;
}

export default Confess;
