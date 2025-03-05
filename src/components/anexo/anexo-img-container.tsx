'use client';

import type { FC, KeyboardEvent } from 'react';
import { CustomImg } from '@/components/custom/custom-img';

interface ImageContainerProps {
  imageUrl: string;
  videoUrl: string;
  altText: string;
  ariaLabel: string;
  onOpenModal: (url: string) => void;
}

export const ImageContainer: FC<ImageContainerProps> = ({
  imageUrl,
  videoUrl,
  altText,
  ariaLabel,
  onOpenModal,
}) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onOpenModal(videoUrl);
    }
  };

  return (
    <article
      className='image-container cursor-pointer w-full'
      aria-label={ariaLabel}
      role='button'
      tabIndex={0}
      onClick={() => onOpenModal(videoUrl)}
      onKeyDown={handleKeyPress}
    >
      <CustomImg
        alt={altText}
        width={400}
        height={400}
        priority
        extend='shadow-md w-full h-full object-cover'
        src={imageUrl}
      />
    </article>
  );
};
