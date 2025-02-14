'use client';

import { useResponsive } from '@/hooks/useResponsive';
import { Paragraph } from '@/components/ui/paragraph';
import { TextHeading } from '@/components/ui/textheading';
import { AnexoClient } from '@/components/anexo/anexo-client';
import { useTranslations } from 'next-intl';

export const Anexo: React.FC = () => {
  const { currentBreakpoint } = useResponsive();
  const levelText = currentBreakpoint === 'xs' ? 5 : 4;

  const t = useTranslations('ClassTango');

  return (
    <section
      id='anexo'
      className='bg-pallete-anexo md:pb-10 pb-5 sm:px-4 flex flex-wrap'
    >
      <div
        className='mx-auto max-w-[1170px] text-white uppercase'
        id='refWidth'
      >
        <TextHeading
          className='font-bold md:pt-10 py-4 px-6 leading-normal tracking-wider text-wrap'
          level={levelText}
          color='white'
        >
          {t('title')}
        </TextHeading>
        <Paragraph className='md:pb-8 pb-6 text-pallete-gold leading-normal tracking-wide text-wrap'>
          {t('subTitle')}
        </Paragraph>

        <AnexoClient />
      </div>
    </section>
  );
};
