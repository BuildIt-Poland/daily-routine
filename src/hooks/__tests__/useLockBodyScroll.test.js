import { renderHook } from '@testing-library/react-hooks';

import useLockBodyScroll from '../useLockBodyScroll';

describe('HOOK - useLockBodyScroll', () => {
  it('should write to localStorage the value of `TEST_VALUE` for the key `TEST_KEY`', () => {
    renderHook(() => useLockBodyScroll(false));

    expect(document.body.style.overflowY).toEqual('scroll');
  });

  it('should write to localStorage the value of `TEST_VALUE` for the key `TEST_KEY`', () => {
    renderHook(() => useLockBodyScroll(true));

    expect(document.body.style.overflowY).toEqual('hidden');
  });
});
