import React from 'react';

import { CONFIDENT } from '../../constants/characterMoods';
import { Fox } from '../Characters/';

function Brag() {
  return <Fox mood={CONFIDENT} />;
}

export default Brag;
