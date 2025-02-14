import { VideoModalProps } from '@/types/interfaces/shows/shows.interface';
import React from 'react';

export const VideoModal: React.FC<VideoModalProps> = ({
  videoUrl,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null; 

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
      <div className='relative w-full h-full max-w-4xl max-h-full'>
        <button
          className='absolute top-4 right-4 text-white text-2xl'
          onClick={onClose}
        >
          &times; 
        </button>
        <iframe
          src={videoUrl}
          className='w-full h-full'
          allow='autoplay; fullscreen'
          
          title='Video'
        ></iframe>
      </div>
    </div>
  );
};
