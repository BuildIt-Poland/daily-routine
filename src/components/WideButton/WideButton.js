import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import generateColors from '../../utils/generateColors';
import {
  BRAG_VARIANT,
  CONFESS_VARIANT,
  FRONT_END_VARIANT,
  BACK_END_VARIANT,
  DEV_OPS_VARIANT
} from '../../constants/colourVariants';
import Button from './Button';
import LightbublIcon from './LightbulbIcon';
import SaltGrignderIcon from './SaltGrinderIcon';
import LongArrow from './LongArrowIcon';

const ICONS = {
  [BRAG_VARIANT]: <LightbublIcon />,
  [CONFESS_VARIANT]: <SaltGrignderIcon />,
  [FRONT_END_VARIANT]: <LongArrow />,
  [BACK_END_VARIANT]: <LongArrow />,
  [DEV_OPS_VARIANT]: <LongArrow />
};

function WideButton({ variant, children, className, to, onClick }) {
  // Render link if 'to' prop is passed, button with handler otherwise
  const props = {
    ...(to ? { as: Link, to } : { onClick: onClick })
  };

  return (
    <Button variant={generateColors(variant)} className={className} {...props}>
      {children}
      {ICONS[variant]}
    </Button>
  );
}

WideButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

export default WideButton;
