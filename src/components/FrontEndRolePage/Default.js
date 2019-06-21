import React from 'react';

import { CONFUSED } from '../../constants/characterMoods';
import { Fox } from '../Characters/';

function Default() {
  return <Fox mood={CONFUSED} />;
}

export default Default;
