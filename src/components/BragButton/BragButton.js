import React from 'react';

import { BRAG } from '../../constants/buttonVariants';
import Button from '../Button';
import Icon from './Icon';

function BragButton() {
  return (
    <Button variant={BRAG} to="/" icon={<Icon />}>
      Brag about my efforts
    </Button>
  );
}

export default BragButton;
