'use client';

import * as React from 'react';
import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes';
import { useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function ProviderUI({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const locale = useLocale();
  
  const currentLocale = (() => {
    switch (locale) {
      case 'es':
        return 'es-ES';
      case 'en':
        return 'en-EN';
      case 'pt':
        return 'pt-BR';
      default:
        return 'es-ES'; // Default locale
    }
  })();

  return (
    <HeroUIProvider navigate={router.push} locale={currentLocale}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
