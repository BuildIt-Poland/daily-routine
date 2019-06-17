import React from 'react';

import { CONFUSED } from '../../constants/characterMoods';
import { Whale } from '../Characters';

function Default() {
  return <Whale mood={CONFUSED} />;
}

export default Default;
