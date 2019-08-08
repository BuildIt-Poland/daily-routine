import { renderHook } from '@testing-library/react-hooks';
import * as bodyScrollLock from 'body-scroll-lock';

import useLockBodyScroll from '../useLockBodyScroll';

describe('HOOK - useLockBodyScroll', () => {
  it("calls 'enableBodyScroll' when falsy flag is passed", () => {
    const spy = jest.spyOn(bodyScrollLock, 'enableBodyScroll');
    renderHook(() => useLockBodyScroll(false));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("calls 'disableBodyScroll' when truthy flag is passed", () => {
    const spy = jest.spyOn(bodyScrollLock, 'disableBodyScroll');
    renderHook(() => useLockBodyScroll(true));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
