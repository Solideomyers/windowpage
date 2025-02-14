// useSiteConfig.ts
import { useTranslations } from 'next-intl';
import { siteConfig } from './site';

// 1. Extraer las claves válidas de navigation desde siteConfig
type NavItem = (typeof siteConfig.navItems)[number];
type NavigationKey = NavItem['label'];

// 2. Tipo para claves de traducción anidadas
type NestedTranslationKey = `${NavigationKey}.${'label' | 'href'}`;

export const useSiteConfig = () => {
  const t = useTranslations('Navigation');

  // 3. Función de procesamiento genérica con tipos seguros
  const processItems = <T extends readonly { label: NavigationKey; href: string }[]>(
    items: T
  ) =>
    items.map((item) => ({
      ...item,
      label: t(`${item.label}.label` as NestedTranslationKey),
      href: t(`${item.label}.href` as NestedTranslationKey, {
        default: item.href,
      }),
    }));

  return {
    ...siteConfig,
    title: t('title'),
    description: t('description'),
    navItems: processItems(siteConfig.navItems),
    navMenuItems: processItems(siteConfig.navMenuItems),
  };
};
