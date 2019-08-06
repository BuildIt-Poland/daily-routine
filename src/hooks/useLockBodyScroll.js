// Blocks scrolling on page
// Most of time state of component such as isVisible, isAnimating should be passed

import { useLayoutEffect } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

function useLockBodyScroll(shouldLock = false) {
  useLayoutEffect(() => {
    if (shouldLock) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => clearAllBodyScrollLocks();
  }, [shouldLock]);
}

export default useLockBodyScroll;
