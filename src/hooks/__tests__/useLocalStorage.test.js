import { renderHook, act } from '@testing-library/react-hooks';

import useLocalStorage from '../useLocalStorage';

describe('HOOK - useLocalStorage', () => {
  const TEST_LOCAL_STORAGE_KEY = 'TEST_KEY';
  const TEST_LOCAL_STORAGE_VALUE = 'TEST_VALUE';
  const TEST_LOCAL_STORAGE_NEW_VALUE = 'TEST_NEW_VALUE';

  it('should write to localStorage the value of `TEST_VALUE` for the key `TEST_KEY`', () => {
    renderHook(() => useLocalStorage(TEST_LOCAL_STORAGE_KEY, TEST_LOCAL_STORAGE_VALUE));

    expect(localStorage.getItem(TEST_LOCAL_STORAGE_KEY)).toBe(TEST_LOCAL_STORAGE_VALUE);
  });

  it('should change localStorage value from `TEST_VALUE` to `TEST_NEW_VALUE` for the key `TEST_KEY`', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_LOCAL_STORAGE_KEY, TEST_LOCAL_STORAGE_VALUE));

    const [, setValue] = result.current;

    act(() => setValue(TEST_LOCAL_STORAGE_NEW_VALUE));

    expect(localStorage.getItem(TEST_LOCAL_STORAGE_KEY)).toBe(TEST_LOCAL_STORAGE_NEW_VALUE);
  });
});
