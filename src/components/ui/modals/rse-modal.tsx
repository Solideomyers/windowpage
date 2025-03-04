'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/modals/modal';
import { useTranslations } from 'next-intl';

import { MessageKeys } from 'next-intl';

const RichText: React.FC<{ id: MessageKeys<{ heading: string; title: string; subTitle: string; content: string; programsTitle: string; programs: string; list_programs: string; service: string; Solidarity: string; commitment: string; message: string; }, "title" | "subTitle" | "content" | "programsTitle" | "programs" | "list_programs" | "service" | "Solidarity" | "commitment" | "message">; tag: keyof JSX.IntrinsicElements; className?: string }> = ({ id, tag: Tag, className = '' }) => {
  const t = useTranslations('Modals.rse_modal');
  return t.rich(id, {
    [Tag]: (chunks) => <Tag className={className}>{chunks}</Tag>,
  });
};

export const RseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Modals.rse_modal');

  return (
    <Modal
      triggerText='rse'
      content={
        <div className='flex flex-col gap-2 font-montserrat'>
          <RichText id='title' tag='span' className='font-bold mr-2' />
          <RichText id='subTitle' tag='span' />
          <RichText id='content' tag='p' className='transition-all duration-300 ease-in-out text-balance' />
          <div className='transition-all duration-300 ease-in-out'>
            <RichText id='programsTitle' tag='h4' className='font-bold' />
            <RichText id='programs' tag='p' />
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <RichText id='list_programs' tag='li' />
            </ul>
          </div>
          <div>
            <RichText id='service' tag='h4' className='font-bold' />
            <RichText id='Solidarity' tag='p' className='transition-all duration-300 ease-in-out' />
          </div>
          <div>
            <RichText id='commitment' tag='h4' className='font-bold' />
            <RichText id='message' tag='p' className='transition-all duration-300 ease-in-out' />
          </div>
        </div>
      }
      title={t('heading')}
      imageSrcTop='/rse/tango-show-rse.png'
      imageAltTop='RSE modal image'
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};
