'use client';

import { useState } from 'react';
import Image from 'next/image';
import { VideoModal } from '@/components/ui/modals/vimeo-modal';

export const AnexoClient: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleOpenModal = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoUrl('');
  };

  return (
    <div className='grid md:grid-cols-2 gap-5 px-4 md:px-0'>
      <div
        className='image-container cursor-pointer'
        onClick={() =>
          handleOpenModal(
            'https://player.vimeo.com/video/386222955?autoplay=1&loop=1&autopause=0'
          )
        }
        aria-label='Ver clase de tango'
      >
        <div className='relative'>
          <Image
            loading='lazy'
            alt='Tango lesson and show'
            width={400}
            height={400}
            className='shadow-md w-full h-full object-cover'
            src='https://www.laventanaweb.com/images/tango-lesson.jpg'
          />
        </div>
      </div>

      <div
        className='image-container cursor-pointer'
        onClick={() =>
          handleOpenModal(
            'https://player.vimeo.com/video/851764714?autoplay=1&loop=1&autopause=0'
          )
        }
        aria-label='Ver degustación de vinos'
      >
        <div className='relative'>
          <Image
            loading='lazy'
            alt='Wine tasting'
            width={400}
            height={400}
            className='shadow-md w-full h-full object-cover'
            src='https://www.laventanaweb.com/images/wine-tasting.jpg'
          />
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        videoUrl={videoUrl}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
