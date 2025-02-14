export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'La Ventana',

  title: {
    en: 'La Ventana',
    es: 'La Ventana',
    default: 'La Ventana',
  },
  description: 'La ventana web',
  navItems: [
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
      href: '/',
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
      href: '/',
    },
  ],
  navMenuItems: [
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
      href: '/',
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
      href: '/',
    },
  ],
} as const;
