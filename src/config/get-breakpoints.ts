import { breakpoints } from './breakpoints';
import type { Breakpoint } from './interfaces/breakpoints-interface';

export function  getBreakpoint(width: number): Breakpoint {
  for (const [key, config] of Object.entries(breakpoints)) {
    const { min, max } = config as { min?: number; max?: number };
    const meetsMin = min === undefined || width >= min;
    const meetsMax = max === undefined || width <= max;

    if (meetsMin && meetsMax) {
      console.log({key})
      return breakpoints as unknown as Breakpoint;
    }
  }

  return 'lg';
}
