import { renderHook, act } from '@testing-library/react-hooks';

import useLocalStorage from '../useLocalStorage';

describe('HOOK - useLocalStorage', () => {
  it('should write default value `male` to localStorage', () => {
    renderHook(() => useLocalStorage('gender', 'male'));

    expect(localStorage.getItem('gender')).toBe('male');
  });

  it('should change the default value `male` that is in localStorage to `female`', () => {
    const {
      result: {
        current: [, setValue]
      }
    } = renderHook(() => useLocalStorage('gender', 'male'));

    act(() => setValue('female'));

    expect(localStorage.getItem('gender')).toBe('female');
  });
});
