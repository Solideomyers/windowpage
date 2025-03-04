import { clsx } from 'clsx';
import { fontMontserrat, fontRubik } from '@/fonts/fonts';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';
import { ProviderUI } from '@/providers/nextui/provider-ui';
import { ProviderQuery } from '@/providers/query/provider-query';
import { FlashProvider } from '@/providers/flash/flash';
import { Metadata, Viewport } from 'next';
import languages from '@/i18n/languages.json';
import { siteConfig } from '@/config/site';

type Props = {
  children: ReactNode;
  locale: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('RootLayout');

  return {
    title: {
      default: t('app_name'),
      template: `%s | ${siteConfig.name}`,
    },
    description: t('description'),
    icons: {
      icon: siteConfig.logo,
    },
    openGraph: {
      title: t('app_name'),
      description: t('description'),
      images: [siteConfig.logo],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('app_name'),
      description: t('description'),
      images: [siteConfig.logo],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateViewport(): Promise<Viewport> {
  return {
    themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    colorScheme: 'light',
    viewportFit: 'cover',
  };
}

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();
  const language = languages[locale as keyof typeof languages];

  return (
    <html className='light' lang={locale} dir={language.dir} suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen bg-background antialiased',
          fontMontserrat.variable,
          fontRubik.variable
        )}
      >
        {/* Skip to content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:p-2 focus:rounded focus:z-50"
        >
          Skip to content
        </a>

        <NextIntlClientProvider messages={messages}>
          <ProviderUI themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
            <ProviderQuery>
              <FlashProvider>
                <main id="main-content" role="main">
                  {children}
                </main>
              </FlashProvider>
            </ProviderQuery>
          </ProviderUI>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}