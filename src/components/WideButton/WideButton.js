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
} from '../../constants/coloursVariants';
import Wrapper from './Wrapper';
import LightbublIcon from './LightbulbIcon';
import SaltGrignderIcon from './SaltGrinderIcon';
import LongArrow from './LongArrowIcon';

const ICONS = {
  [BRAG_VARIANT]: LightbublIcon,
  [CONFESS_VARIANT]: SaltGrignderIcon,
  [FRONT_END_VARIANT]: LongArrow,
  [BACK_END_VARIANT]: LongArrow,
  [DEV_OPS_VARIANT]: LongArrow
};

function WideButton({ variant = 'frontend', children, to, onClick = () => {} }) {
  // Render link if 'to' prop is passed, button with handler otherwise
  const props = {
    ...(to ? { as: Link, to } : { onClick: onClick })
  };

  const Icon = ICONS[variant];

  return (
    <Wrapper colours={generateColors(variant)} {...props}>
      {children}
      {<Icon />}
    </Wrapper>
  );
}

WideButton.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

export default WideButton;
