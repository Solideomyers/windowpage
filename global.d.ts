import en from './messages/en.json' assert {type: "json"};
import { routing } from '@/i18n/routing';

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}

  // Define a global type for supported locales
  type SupportedLocale = 'en' | 'es' | 'pt';

  // Define a global type for locale
  type Locale = (typeof routing.locales)[number];
}
