import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales: SupportedLocale[] = ['en', 'es', 'pt'];

export const defaultLocale: SupportedLocale = 'es';

export const pathnames = {
  '/': '/',
  '/menu': {
    en: '/menu',
    es: '/menu',
    pt: '/cardapio',
  },
  '/reservation/[show]': {
    en: '/booking/[show]',
    es: '/reserva/[show]',
    pt: '/reserva/[show]',
  },
} as const;

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  localePrefix: 'always',
  // Paths
  pathnames,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type AppPathnamesStatic = keyof typeof pathnames;

export type AppPathnamesDynamic = {
  [K in keyof typeof pathnames]: K extends
    | `${string}[${string}]${string}`
    | `${string}:${string}?${string}`
    ? { pathname: K; params: Record<string, string> }
    : never;
}[keyof typeof pathnames];

export type AppPathnames = AppPathnamesStatic | AppPathnamesDynamic;
