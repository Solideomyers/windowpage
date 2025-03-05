'use client';

import { useState } from 'react';
import { VideoModal } from '@/components/ui/modals/vimeo-modal';
import { CustomImg } from '@/components/custom/custom-img';

export const SalonesClient = () => {
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
    <section>
      <article
        onClick={() =>
          handleOpenModal(
            'https://player.vimeo.com/video/689651119?autoplay=1&loop=1&autopause=0'
          )
        }
        aria-label='ver salones'
      >
        <CustomImg
          src='https://www.laventanaweb.com/images/salon.jpg'
          alt='La Ventana Salon'
          width={1000}
          height={1000}
          priority
          quality={100}
          sizes='100vw'
          extend='object-cover w-full h-auto h-auto cursor-pointer'
        />
      </article>

      {/* Video Modal */}
      <VideoModal
        videoUrl={videoUrl}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
