import { renderHook } from '@testing-library/react-hooks';

import useLockBodyScroll from '../useLockBodyScroll';

describe('HOOK - useLockBodyScroll', () => {
  it("sets body overflow to 'scroll' when falsy flag is passed", () => {
    renderHook(() => useLockBodyScroll(false));

    expect(document.body.style.overflowY).toEqual('auto');
  });

  it("sets body overflow to 'hidden' when truthy flag is passed", () => {
    renderHook(() => useLockBodyScroll(true));

    expect(document.body.style.overflowY).toEqual('hidden');
  });
});
