import { AppPathnames, AppPathnamesStatic } from '@/i18n/routing';

export type SiteConfig = typeof siteConfig;

interface NavItem {
  label: string;
  href: string | AppPathnamesStatic | AppPathnames;
}

const navItems: NavItem[] = [
  {
    label: 'salon',
    href: '#salon',
  },
  {
    label: 'menu',
    href: '#menu',
  },
  {
    label: 'show',
    href: '#shows',
  },
  {
    label: 'songs',
    href: '/' as AppPathnamesStatic,
  },
  {
    label: 'contact',
    href: '#contacto',
  },
  {
    label: 'events',
    href: 'https://eventosbsas.com/',
  },
  {
    label: 'bookings',
    href: '#reservas',
  },
  {
    label: 'usd',
    href: '/' as AppPathnamesStatic,
  },
];

export const siteConfig = {
  name: 'La Ventana',

  title: {
    en: 'La Ventana',
    es: 'La Ventana',
    default: 'La Ventana',
  },
  description: 'La ventana web',
  logo: '/logo.png',
  navItems,
  navMenuItems: navItems,
} as const;
