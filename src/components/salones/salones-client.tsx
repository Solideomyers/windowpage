'use client';

import { useState } from 'react';
import Image from 'next/image';
import { VideoModal } from '@/components/ui/modals/vimeo-modal';

export const SalonesClient: React.FC = () => {
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
    <>
      <div
        onClick={() =>
          handleOpenModal(
            'https://player.vimeo.com/video/689651119?autoplay=1&loop=1&autopause=0'
          )
        }
        aria-label='ver salones'
      >
        <div>
          <Image
            priority
            loading='eager'
            alt='La Ventana Salon'
            width={1000}
            height={1000}
            data-src='https://www.laventanaweb.com/images/salon.jpg'
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            src='https://www.laventanaweb.com/images/salon.jpg'
          />
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        videoUrl={videoUrl}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
