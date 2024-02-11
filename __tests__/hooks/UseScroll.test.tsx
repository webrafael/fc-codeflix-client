import { UseScroll } from '@/app/hooks/UseScroll';
import { act, renderHook } from '@testing-library/react';

describe('UseScroll', () => {
  it('should respond to scroll events', () => {
    const { result } = renderHook(() => UseScroll());

    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);

    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);
  });
});
