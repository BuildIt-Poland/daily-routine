import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { RouteTransitionAnimationContext } from '../../context/RouteTransitionAnimationContext';
import Button from '../Button';
import ArrowIcon from './ArrowIcon';

function RedirectButton({ children, to, ...props }) {
  const { animateAndRedirect } = useContext(RouteTransitionAnimationContext);

  function handleClick(e) {
    e.preventDefault();
    animateAndRedirect(to);
  }

  return (
    <Button to={to} onClick={handleClick} {...props}>
      {children}
      <ArrowIcon />
    </Button>
  );
}

RedirectButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default RedirectButton;
