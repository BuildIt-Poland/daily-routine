import React from 'react';

import { CONFESS } from '../../constants/buttonVariants';
import Button from '../Button';
import Icon from './Icon';

function ConfessButton() {
  return (
    <Button variant={CONFESS} to="/" icon={<Icon />}>
      Confess my mistake
    </Button>
  );
}

export default ConfessButton;
