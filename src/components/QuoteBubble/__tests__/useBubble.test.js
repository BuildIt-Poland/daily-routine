import { renderHook } from '@testing-library/react-hooks';

import useBubble from '../useBubble';

describe('HOOK - useBubble', () => {
  it('should extract proper data from given URL', () => {
    const { result } = renderHook(() => useBubble('/devops/brag/trivially-bluntly-ample-boxer'));
    expect(result.current.quoteID).toEqual('trivially-bluntly-ample-boxer');
    expect(result.current.isInDefaultPose).toEqual(false);
    expect(result.current.quote).toBeDefined();
  });
  it('test if url malformed, quote should be undefined', () => {
    const { result } = renderHook(() => useBubble('/devops/brag/trivially-bluntly-ampleXXX-boxer'));
    expect(result.current.quoteID).toEqual('trivially-bluntly-ampleXXX-boxer');
    expect(result.current.isInDefaultPose).toEqual(false);
    expect(result.current.quote).toBeUndefined();
  });
  it('should return true for isInDefaultPose for root role path', () => {
    const { result } = renderHook(() => useBubble('/frontend'));
    expect(result.current.isInDefaultPose).toEqual(true);
  });
});
