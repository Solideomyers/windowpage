'use client';

import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/shadcn/dialog';
import { Button } from '@/components/ui/shadcn/button';
import {
  ButtonRadius,
  ButtonVariant,
} from '@/components/ui/enums/button-variants.enum';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/shadcn/scroll-area';
import { useTranslations } from 'next-intl';

interface ModalProps {
  triggerText: string;
  title: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  content: React.ReactNode;
  imageSrcTop: string;
  imageSrcBottom?: string | undefined;
  imageAltTop: string;
  imageAltBottom?: string | undefined;
  bothImage?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  triggerText,
  isOpen,
  setIsOpen,
  title,
  bothImage = false,
  content,
  imageSrcBottom,
  imageSrcTop,
  imageAltTop,
  imageAltBottom,
}) => {
  const t = useTranslations('Ui');

  useEffect(() => {
    if (isOpen) {
      const modalElement = document.getElementById('modal-content');
      if (modalElement) {
        modalElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button
          variant={ButtonVariant.Default}
          radius={ButtonRadius.Lg}
          size={'lg'}
          className='transition-all duration-300 hover:bg-primary/90 w-full uppercase text-lg mt-2'
        >
          {triggerText}
        </Button>
      </DialogTrigger>

      <DialogOverlay />
      <section>
        <DialogContent
          aria-describedby='modal button'
          className={cn(
            'w-screen max-w-[500px] md-xl:max-w-[550px] h-5/6 my-4 p-0 gap-0',
            'transform transition-all duration-300',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
            'data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom',
            'data-[state=open]:scale-100 data-[state=closed]:scale-95',
            'focus:ring-0 focus:outline-none',
            'font-montserrat'
          )}
        >
          <DialogHeader className='bg-gradient-to-l from-[#F5E286] via-[#F5E286] to-[#E8BE6C] w-full z-50 transition-transform duration-400 ease-out sticky top-0'>
            <DialogTitle
              className={cn(
                'p-2 rounded-t-xl text-center min-h-[60px] flex items-center justify-center',
                bothImage ? 'uppercase' : 'capitalize'
              )}
            >
              <span className='px-4'>{title}</span>
            </DialogTitle>
          </DialogHeader>
          <ScrollArea
            type='scroll'
            className='h-full pt-4 focus-within:ring-0 focus-within:outline-none focus:border-none'
          >
            <div className='w-full flex justify-center mb-4'>
              <Image
                alt={imageAltTop}
                src={imageSrcTop}
                width={800}
                height={800}
                priority
                loading={'eager'}
                className={cn(
                  'w-full aspect-auto',
                  bothImage
                    ? 'aspect-auto max-w-full lg:max-w-sm'
                    : 'max-w-[228px]'
                )}
              />
            </div>
            <div
              id='modal-content'
              tabIndex={-1}
              className='flex flex-col gap-4 h-full text-sm px-6 pb-4 mb-10 focus-within:ring-0 focus-within:outline-none focus:border-none'
            >
              {content}

              {bothImage && (
                <div className='w-full flex justify-center mb-4'>
                  <Image
                    alt={imageAltBottom || ''}
                    src={imageSrcBottom || ''}
                    width={800}
                    height={800}
                    loading='lazy'
                    className='aspect-auto max-w-[228px]'
                  />
                </div>
              )}
            </div>
            <DialogFooter className='sticky bottom-0 h-16 z-50 w-full'>
              <div className='h-16 text-center overflow-hidden'>
                <Button
                  variant={ButtonVariant.Outline}
                  radius={ButtonRadius.None}
                  className='flex justify-start h-full w-full font-bold border-none'
                  onClick={() => setIsOpen(false)}
                  aria-label='cerrar modal'
                >
                  <span className='px-4 text-lg tracking-wide font-montserrat'>
                    {t('btn_close')}
                  </span>
                </Button>
              </div>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </section>
    </Dialog>
  );
};
