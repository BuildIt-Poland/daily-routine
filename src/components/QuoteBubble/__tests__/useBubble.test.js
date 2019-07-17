import { renderHook } from '@testing-library/react-hooks';

import useBubble from '../useBubble';

describe('HOOK - useBubble', () => {
  it('should extract proper data from given URL', () => {
    const { result } = renderHook(() => useBubble('/frontend/confess/heavydutyfox'));

    expect(result.current.quoteID).toEqual('heavydutyfox');
    expect(result.current.isInDefaultPose).toEqual(false);
    expect(result.current.quote).toBeDefined();
  });

  it('should return true for isInDefaultPose for root role path', () => {
    const { result } = renderHook(() => useBubble('/frontend'));

    expect(result.current.isInDefaultPose).toEqual(true);
  });
});
