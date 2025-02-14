import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { fontMontserrat, fontRubik } from '@/fonts/fonts';
import clsx from 'clsx';
import { siteConfig } from '@/config/site';
import { ProviderUI } from '@/providers/nextui/provider-ui';
import { ProviderQuery } from '@/providers/query/provider-query';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import languages from '@/i18n/languages.json';
import { FlashProvider } from '@/providers/flash/flash';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('RootLayout');

  return {
    title: {
      default: t('app_name'),
      template: `%s | ${siteConfig.name}`,
    },
    description: t('description'),
    icons: {
      icon: '/logo.png',
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  setRequestLocale(locale);

  const language = languages[locale as keyof typeof languages];

  return (
    <html
      lang={locale}
      dir={language.dir}
      className={clsx(
        'min-h-screen bg-background antialiased',
        fontMontserrat.variable,
        fontRubik.variable,
        'light'
      )}
      style={{ colorScheme: 'light' }}
    >
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={siteConfig.description} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ProviderUI
            themeProps={{ attribute: 'class', defaultTheme: 'light' }}
          >
            <ProviderQuery>
              <FlashProvider>{children}</FlashProvider>
            </ProviderQuery>
          </ProviderUI>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
