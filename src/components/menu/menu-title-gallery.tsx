'use client';

import { TextHeading } from '@/components/ui/textheading';
import { useResponsive } from '@/hooks/useResponsive';
import { useTranslations } from 'next-intl';

export const MenuTitleGallery = () => {
  const { currentBreakpoint } = useResponsive();
  const levelText = currentBreakpoint === 'xs' ? 5 : 5;
  const t = useTranslations('Menu');

  return (
    <TextHeading
      color='white'
      level={levelText}
      className={`
                text-white
                 text-base sm:text-3xl
                md:p-14
                py-9
                px-2
                text-center
                tracking-wider
                w-full
                uppercase
                `}
    >
      {t('title')}
    </TextHeading>
  );
};
