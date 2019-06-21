import React from 'react';

import { SAD } from '../../constants/characterMoods';
import { Fox } from '../Characters/';

function Confess() {
  return <Fox mood={SAD} />;
}

export default Confess;
