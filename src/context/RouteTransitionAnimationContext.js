import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const RouteTransitionAnimationContext = createContext();
const { Provider } = RouteTransitionAnimationContext;

function RouteTransitionAnimationProvider({ children, history }) {
  const REDIRECT_DELAY = 250;

  function redirectWithDelay(url) {
    setTimeout(() => {
      history.push(url);
    }, REDIRECT_DELAY);
  }

  function animateAndRedirect(redirectUrl) {
    setIsAnimating(true);
    redirectWithDelay(redirectUrl);
  }

  function stopAnimation() {
    setIsAnimating(false);
  }

  const [isAnimating, setIsAnimating] = useState(false);

  return <Provider value={{ isAnimating, animateAndRedirect, stopAnimation }}>{children}</Provider>;
}

RouteTransitionAnimationProvider.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object
};

export { RouteTransitionAnimationContext, RouteTransitionAnimationProvider };
