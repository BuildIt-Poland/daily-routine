import React from 'react';

import { SAD } from '../../constants/characterMoods';
import { Whale } from '../Characters';

function Confess() {
  return <Whale mood={SAD} />;
}

export default Confess;
