// Blocks scrolling on page
// Most of time state of component such as isVisible, isAnimating should be passed

import { useLayoutEffect } from 'react';

function setBodyScroll(overflow) {
  document.body.style.overflowY = overflow;
}

function useLockBodyScroll(shouldLock = false) {
  useLayoutEffect(() => {
    if (shouldLock) {
      setBodyScroll('hidden');
    } else {
      setBodyScroll('auto');
    }

    return () => setBodyScroll('auto');
  }, [shouldLock]);
}

export default useLockBodyScroll;
