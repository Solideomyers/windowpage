import { BreakpointConfig } from './interfaces/breakpoints-interface';

export const breakpoints: Record<string, BreakpointConfig> = {
  xs: { min: 0, max: 639 },
  sm: { min: 640, max: 767 },
  md: { min: 768, max: 1023 },
  lg: { min: 1024, max: 1279 },
  xl: { min: 1280, max: 1535 },
  '2xl': { min: 1536, max: 1919 },
  '3xl': { min: 1920 },
};
