import { useState, useEffect } from 'react';
import { breakpoints } from '@/config/breakpoints';
import { Breakpoint } from '@/config/interfaces/breakpoints-interface';
import { debounce } from '@/lib/utils';

export const useResponsive = () => {
  // Define a fixed default value to avoid mismatches.
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('md');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      const newBreakpoint = Object.keys(breakpoints).find((key) => {
        const { min, max } = breakpoints[key];
        return width >= min && (max === undefined || width < max);
      }) as Breakpoint;

      if (newBreakpoint) {
        // Use the update function to avoid dependencies and compare with the previous value.
        setCurrentBreakpoint((prevBreakpoint) =>
          prevBreakpoint !== newBreakpoint ? newBreakpoint : prevBreakpoint
        );
      }
    };

    const debouncedHandleResize = debounce(handleResize, 300);

    window.addEventListener('resize', debouncedHandleResize);
    // Run the function on mount to update the actual breakpoint.
    handleResize();

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []); // The empty dependency ensures it runs only once.

  return { currentBreakpoint };
};
