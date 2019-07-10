import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const LandingPageAnimationContext = createContext();
const { Provider } = LandingPageAnimationContext;

function LandingPageAnimationProvider({ children, history }) {
  const REDIRECT_DELAY = 1000;

  function redirectWithDelay(url) {
    setTimeout(() => {
      history.push(url);
    }, REDIRECT_DELAY);
  }

  function animateAndRedirect(redirectUrl) {
    toggleAnimation(state => ({
      ...state,
      isAnimated: true
    }));
    redirectWithDelay(redirectUrl);
  }

  function stopAnimation() {
    toggleAnimation(state => ({
      ...state,
      isAnimated: false
    }));
  }

  const initialState = {
    isAnimated: false,
    animateAndRedirect,
    stopAnimation
  };

  const [animation, toggleAnimation] = useState(initialState);

  return <Provider value={animation}>{children}</Provider>;
}

LandingPageAnimationProvider.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object
};

export { LandingPageAnimationContext, LandingPageAnimationProvider };
