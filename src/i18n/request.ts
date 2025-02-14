import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.locales[1];
  }

  try {
    const messages = (
      await (locale === 'es'
        ? import('../../messages/es.json')
        : import(`../../messages/${locale}.json`))
    ).default;
    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Error loading messages: ${error}`);
    throw error;
  }
});
