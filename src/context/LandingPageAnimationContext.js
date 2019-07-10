import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const LandingPageAnimationContext = createContext();
const { Provider } = LandingPageAnimationContext;

function LandingPageAnimationProvider({ children, history }) {
  const REDIRECT_DELAY = 1300;

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

LandingPageAnimationProvider.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object
};

export { LandingPageAnimationContext, LandingPageAnimationProvider };
