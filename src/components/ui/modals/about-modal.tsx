'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/modals/modal';
import { useTranslations } from 'next-intl';

export const AboutUsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('Ui');
  const tAboutUs = useTranslations('Modals.about_us');

  const description = tAboutUs.raw('description') as string[];
  const values = tAboutUs.raw('values') as Record<string, string>;

  const content = (
    <article className='flex flex-col gap-2 text-justify'>
      {description.map((paragraph, index) => (
        <p key={`desc-${index}`}>{paragraph}</p>
      ))}

      {Object.values(values).map((value, index) => (
        <p key={`value-${index}`}>{value}</p>
      ))}
    </article>
  );

  return (
    <Modal
      triggerText={t('about_us.modal_aboutus')}
      content={content}
      title={t('about_us.modal_aboutus')}
      imageSrcTop={'/modal/familia_tango.png'}
      imageAltTop={'about us modal image'}
      imageSrcBottom={'/rse/tango-show-rse.png'}
      imageAltBottom={'flag argentine modal image'}
      bothImage={true}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};
