'use client';

import Image from 'next/image';
import React, { useState, useEffect, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';

interface VimeoVideoProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const validateVideoId = (videoId: string): boolean => {
  const vimeoIdRegex = /^\d+$/;
  return vimeoIdRegex.test(videoId);
};

const fetchVideoSrc = async (videoId: string, autoplay: boolean, loop: boolean, muted: boolean): Promise<string> => {
  if (!validateVideoId(videoId)) {
    throw new Error('Invalid video ID');
  }
  return `https://player.vimeo.com/video/${videoId}?background=1&autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&byline=0&title=0&muted=${muted ? 1 : 0}`;
};

export const VideoSrc: React.FC<VimeoVideoProps> = ({
  videoId,
  autoplay = true,
  loop = true,
  muted = true,
}) => {
  const { data: src, error } = useQuery({
    queryKey: ['videoSrc', videoId, autoplay, loop, muted],
    queryFn: () => fetchVideoSrc(videoId, autoplay, loop, muted)
  });

  if (error) {
    return <p>Error loading video</p>;
  }

  return (
    <Suspense
      fallback={
        <Image
          src='/preload.png'
          alt='loading video'
          loading='lazy'
          quality={100}
          width={1920}
          height={1000}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      }
    >
      {src ? (
        <iframe
          src={src as string}
          className='w-full h-full'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
          title='Vimeo Video'
          loading='lazy'
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </Suspense>
  );
};
