export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface BreakpointConfig {
  min: number;
  max?: number;
}
