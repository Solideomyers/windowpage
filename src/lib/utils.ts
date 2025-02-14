import { format } from 'date-fns';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { breakpoints } from '@/config/breakpoints';
import { Breakpoint } from '@/config/interfaces/breakpoints-interface';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function isValidGoogleMapsUrl(url: string): boolean {
  const googleMapsRegex = /^https:\/\/www\.google\.com\/maps\/embed\?/;
  return googleMapsRegex.test(url);
}

export function formatDate(date: Date): string {
  return format(date, 'P');
}

export function parseDate(date: string): Date {
  return new Date(date);
}

export const parseToPathUrl = (name: string): string => {
  return name.replace(/[\s+-]+/g, '-').toLowerCase();
};

export const parseToNormalText = (pathUrl: string): string => {
  return pathUrl
    .replace(/-/g, ' - ')
    .replace(/ - /g, '-')
    .replace(/-(?!\s)/g, '- ')
    .replace(/(?<!\s)\+/g, ' + ')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Determines the initial breakpoint based on the window's inner width.
 * If the code is executed in a non-browser environment (where `window` is undefined),
 * it defaults to the provided `breakpointDefault` or the smallest breakpoint ('xs').
 *
 * @param {Breakpoint} [breakpoint] - Optional default breakpoint to use if `window` is undefined.
 * @returns {Breakpoint} The initial breakpoint based on the current window width.
 */
export const getInitialBreakpoint = (breakpoint?: Breakpoint): Breakpoint => {
  if (typeof window === 'undefined') {
    return breakpoint || 'xs';
  }

  const width = window.innerWidth;
  const sortedBreakpoints = Object.entries(breakpoints).sort(
    (a, b) => b[1].min - a[1].min
  );

  for (const [key, value] of sortedBreakpoints) {
    if (width >= value.min) {
      return key as Breakpoint;
    }
  }
  return 'xs';
};

/**
 * Creates a debounced function that delays invoking the provided function until after 
 * the specified wait time has elapsed since the last time the debounced function was invoked.
 * 
 * @template P - Tipo de los parámetros de la función original.
 * @param func - Función a debouncear.
 * @param wait - Tiempo de espera en milisegundos.
 * @returns Función debounceada con los mismos parámetros que la original.
 * 
 * @example
 * ```typescript
 * const logMessage = (message: string) => {
 *   console.log(message);
 * };
 * 
 * const debouncedLogMessage = debounce(logMessage, 2000);
 * 
 * debouncedLogMessage("Hello"); // Sólo esta llamada se ejecutará después de 2 segundos
 * ```
 */
export const debounce = <P extends unknown[]>(
  func: (...args: P) => void,
  wait: number
): ((...args: P) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: P) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Returns the URL of the flag image corresponding to the given locale.
 *
 * @param locale - The locale code for which to get the flag image URL.
 * @returns The URL of the flag image. If the locale is not found, returns the URL of the Spanish flag image.
 */
export const getFlagImageSrc = (locale: string): string => {
  const flagImages: { [key: string]: string } = {
    en: 'https://www.laventanaweb.com/images/united-kingdom.png',
    es: 'https://www.laventanaweb.com/images/argentina.png',
    pt: 'https://www.laventanaweb.com/images/brazil.png',
    ch: 'https://www.laventanaweb.com/images/china.png',
  };

  return flagImages[locale] || flagImages['es'];
};
