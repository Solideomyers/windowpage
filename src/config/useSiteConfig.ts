import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';

// 1. Extract valid navigation keys from siteConfig
type NavItem = (typeof siteConfig.navItems)[number];

type NavigationKey = NavItem['label'];

// 2. Type for nested translation keys
type NestedTranslationKey = `${'salon' | 'menu' | 'show' | 'songs' | 'contact' | 'events' | 'bookings' | 'usd'}.${'label' | 'href'}`;

export const useSiteConfig = () => {
  const t = useTranslations('Navigation');

  // 3. Generic processing function with type safety
  const processItems = <
    T extends readonly { label: NavigationKey; href: string | { pathname: string; params: Record<string, string> } }[]
  >(
    items: T
  ) =>
    items.map((item) => ({
      ...item,
      label: t(`${item.label}.label` as NestedTranslationKey),
      href: typeof item.href === 'string' ? item.href : item.href.pathname,
      
    }));

  return {
    ...siteConfig,
    title: t('title'),
    description: t('description'),
    navItems: processItems(siteConfig.navItems),
    navMenuItems: processItems(siteConfig.navMenuItems),
  };
};
