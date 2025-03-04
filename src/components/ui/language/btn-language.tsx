'use client';

import { FC, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Popover } from '@/components/ui/shadcn/popover';
import { SwitchLanguageVariant } from '@/components/ui/enums/switch-variants.enum';
import { BtnLangTrigger } from '@/components/ui/language/btn-lang-trigger';
import { BtnLangContent } from '@/components/ui/language/btn-lang-content';

type LanguageSwitcherProps = {
  /**
   * Indicates the component variant:
   * - "mobile": shows the version optimized for mobile devices.
   * - "desktop": shows the desktop version with animation on the icon.
   */
  variant?: SwitchLanguageVariant.Mobile | SwitchLanguageVariant.Desktop;
  sideOffset?: number;
};

export const SwitchLanguage: FC<LanguageSwitcherProps> = ({
  variant = SwitchLanguageVariant.Mobile,
  sideOffset = 16,
}) => {
  const locale = useLocale();

  const t = useTranslations('LocaleSwitcher');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  // Conditional styles for the button based on the variant
  const buttonClasses =
    variant === SwitchLanguageVariant.Mobile
      ? 'w-16 h-16 flex items-center justify-center bg-transparent hover:bg-transparent focus:outline-none focus-within:ring-0 sm:hidden'
      : 'bg-white w-full h-6 flex items-center justify-center rounded-bl-lg rounded-br-none rounded-tl-none rounded-tr-none focus:outline-none hidden sm:flex';

  return (
    <nav role={t('label')} aria-label={t('label')} className='relative'>
      <Popover onOpenChange={handleOpenChange}>
        {/* Trigger */}
        <BtnLangTrigger
          variant={variant}
          locale={locale as Locale}
          isOpen={isOpen}
          buttonClasses={buttonClasses}
          label={t('label')}
        />
        {/* Popover content */}
        <BtnLangContent sideOffset={sideOffset} />
      </Popover>
    </nav>
  );
};
