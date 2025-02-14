import { useTranslations } from 'next-intl';
import { siteConfig } from './site';

export const useSiteConfig = () => {
  const t = useTranslations('Navigation');
  return {
    ...siteConfig,
    title: t('title'),
    description: t('description'),
    navItems: siteConfig.navItems.map((item) => ({
      ...item,
      label: t(`${item.label}.label`),
      href: t(`${item.label}.href`, { default: item.href }),
    })),
    navMenuItems: siteConfig.navMenuItems.map((item) => ({
      ...item,
      label: t(`${item.label}.label`),
      href: t(`${item.label}.href`, { default: item.href }),
    })),
  };
};
