import React from 'react';

import { CONFUSED } from '../../constants/characterMoods';
import { Robot } from '../Characters';

function Default() {
  return <Robot mood={CONFUSED} />;
}

export default Default;
