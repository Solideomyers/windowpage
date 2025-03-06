'use client';

import { useState, type FC } from 'react';
import { VideoModal } from '@/components/ui/modals/vimeo-modal';
import { ImageContainer } from '@/components/anexo/anexo-img-container';

export const AnexoClient: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl('');
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      aria-label='Watch Tango lessons and show'
      className='w-full sm:w-screen max-w-[1147px] grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-4 px-4 md:px-0'
    >
      <h2 className='sr-only'>Cultural Experience at la Ventana</h2>
      <ImageContainer
        imageUrl='https://www.laventanaweb.com/images/tango-lesson.jpg'
        videoUrl='https://player.vimeo.com/video/386222955?autoplay=1&loop=1&autopause=0'
        altText='Tango lesson and show at La Ventana'
        ariaLabel='Watch Tango lesson and show'
        onOpenModal={openModal}
      />
      <ImageContainer
        imageUrl='https://www.laventanaweb.com/images/wine-tasting.jpg'
        videoUrl='https://player.vimeo.com/video/851764714?autoplay=1&loop=1&autopause=0'
        altText='Wine tasting event at La Ventana'
        ariaLabel='Watch wine tasting event'
        onOpenModal={openModal}
      />
      <VideoModal
        videoUrl={videoUrl}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};
