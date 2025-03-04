'use client';

import { useEffect } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/shadcn/dialog';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

type VideoModalProps = {
  videoUrl: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
  ariaLabel?: string;
};

export const VideoModal = ({
  videoUrl,
  isOpen,
  setIsOpen,
  onClose,
  ariaLabel = 'video-modal-title',
}: VideoModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <Dialog modal open={isOpen} onOpenChange={setIsOpen}>
      <DialogPortal>
        <DialogOverlay
          role='presentation'
          bgColor='bg-black'
          blur='backdrop-blur-none'
        />
      </DialogPortal>
      <DialogContent
        role='dialog'
        aria-describedby={ariaLabel}
        aria-labelledby={ariaLabel}
        className='sm:max-w-[800px] p-0 bg-black overflow-hidden'
      >
        <DialogTitle className='sr-only'>
          Video player -{' '}
          {videoUrl.includes('tango')
            ? 'tango Performance'
            : 'Wine Tasting Experience'}
        </DialogTitle>
        <DialogPortal>
          <DialogClose
            className={cn(
              'fixed ring-0 outline-none border-none right-4 top-8 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70'
            )}
            onClick={handleClose}
          >
            <X className='h-5 w-5' />
            <span className='sr-only'>Close</span>
          </DialogClose>
        </DialogPortal>
        {videoUrl && (
          <div className='relative aspect-video w-full'>
            <iframe
              src={videoUrl}
              className='w-full h-full'
              allow='autoplay; fullscreen; picture-in-picture'
              title={`${
                videoUrl.includes('tango') ? 'Tango Lesson' : 'Wine Tasting'
              } Video - La Ventana Cultural Show`}
              loading='lazy'
              aria-label='Video player'
              name='videoFrame'
            ></iframe>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
