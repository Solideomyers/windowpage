import { useState, useLayoutEffect } from 'react';
import { breakpoints } from '@/config/breakpoints';
import { Breakpoint } from '@/config/interfaces/breakpoints-interface';
import { debounce, getInitialBreakpoint } from '@/lib/utils';

/**
 * Custom hook to determine the current responsive breakpoint based on the window width.
 *
 * @param {Breakpoint} [breakpoint] - Optional initial breakpoint.
 * @returns {Object} - An object containing the current breakpoint.
 * @returns {Breakpoint} return.currentBreakpoint - The current responsive breakpoint.
 *
 * @example
 * const { currentBreakpoint } = useResponsive();
 * console.log(currentBreakpoint); // 'md', 'lg', etc.
 *
 * @remarks
 * This hook uses a debounced resize event listener to update the breakpoint.
 * The breakpoints are defined in the `breakpoints` object.
 */
export const useResponsive = (
  breakpoint?: Breakpoint
): { currentBreakpoint: Breakpoint } => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>(
    getInitialBreakpoint(breakpoint)
  );

  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = debounce({
      func: () => {
        const width = window.innerWidth;

        const newBreakpoint = Object.keys(breakpoints).find((key) => {
          const { min, max } = breakpoints[key];
          return width >= min && (max === undefined || width < max);
        }) as Breakpoint;

        if (newBreakpoint && newBreakpoint !== currentBreakpoint) {
          setCurrentBreakpoint(newBreakpoint);
        }
      },
      wait: 100,
    });

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [currentBreakpoint]);

  return { currentBreakpoint };
};
