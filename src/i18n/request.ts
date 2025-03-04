import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  const localeFallback = routing.locales[1];
  
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }
  
  return {
    locale,
    messages: (
      await (locale === localeFallback
        ? import(`../../messages/${localeFallback}.json`)
        : import(`../../messages/${locale}.json`))
    ).default,
  };
});
