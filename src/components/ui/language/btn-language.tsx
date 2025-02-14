'use client';

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/shadcn/dropdown-menu';
import { Button } from '@/components/ui/shadcn/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { FlagImage } from '@/components/ui/language/flag-image';
import { getFlagImageSrc } from '@/lib/utils';
import languages from '@/i18n/languages.json';
import { SwitchLanguageVariant } from '@/components/ui/enums/switch-variants.enum';

interface Language {
  name: string;
  class: string;
  dir: 'ltr' | 'rtl';
  flag: string;
  alt: string;
  labelKey: string;
}

// type Languages = Record<Locale, Language>;

type LanguageSwitcherProps = {
  /**
   * Indicates the component variant:
   * - "mobile": shows the version optimized for mobile devices.
   * - "desktop": shows the desktop version with animation on the icon.
   */
  variant?: SwitchLanguageVariant.Mobile | SwitchLanguageVariant.Desktop;
};

export const SwitchLanguage: React.FC<LanguageSwitcherProps> = ({
  variant = SwitchLanguageVariant.Mobile,
}) => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('SwitchLanguage');
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale !== locale) {
      router.push(`/${newLocale}`);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  // Conditional styles for the button based on the variant
  const buttonClasses =
    variant === SwitchLanguageVariant.Mobile
      ? 'w-16 h-16 flex items-center justify-center bg-transparent hover:bg-transparent focus:outline-none focus-within:ring-0 sm:hidden'
      : 'bg-white w-full h-8 flex items-center justify-center rounded-bl-lg rounded-br-none rounded-tl-none rounded-tr-none overflow-hidden focus:outline-none hidden sm:flex';

  const languagesMap = Object.entries(languages) as [Locale, Language][];

  return (
    // Using a semantic <nav> element and adding aria-label to improve accessibility and SEO
    <nav aria-label={t('name')}>
      <DropdownMenu onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <Button className={buttonClasses} aria-label={t('name')}>
            <Image
              src={getFlagImageSrc(locale)}
              alt={`${locale.toUpperCase()} flag`}
              width={variant === SwitchLanguageVariant.Mobile ? 800 : 600}
              height={variant === SwitchLanguageVariant.Mobile ? 800 : 600}
              className={
                variant === SwitchLanguageVariant.Mobile
                  ? 'p-0 m-0 w-full object-cover'
                  : 'p-0 m-0 w-6 h-6 object-cover'
              }
            />
            {/* Display the language code in uppercase (hidden on mobile according to design) */}
            <span className='ml-2 hidden sm:block sm:m-0 text-foreground'>
              {locale.toUpperCase()}
            </span>
            {variant === SwitchLanguageVariant.Desktop && (
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <ChevronDownIcon
                  className='block h-4 w-4 text-foreground'
                  aria-hidden='true'
                />
              </motion.div>
            )}
            {variant === SwitchLanguageVariant.Mobile && (
              <ChevronDownIcon
                className='hidden sm:block h-4 w-4'
                aria-hidden='true'
              />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-48 absolute top-0 right-4'>
          {languagesMap.map(([code, lang]) => (
            <DropdownMenuItem
              key={code}
              className='flex items-center justify-between'
              onClick={() => switchLanguage(code)}
            >
              <FlagImage
                src={lang.flag}
                alt={lang.alt}
                language={t(
                  lang.labelKey as 'english' | 'spanish' | 'portuguese' | 'name'
                )}
              />
              {locale === code && (
                <CheckIcon className='h-5 w-5' aria-hidden='true' />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
