'use client';

import Image from 'next/image';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  loadingText?: string;
}

export default function Loading({ loadingText = 'Loading...' }: LoadingProps) {
  return (
    <div className='fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50'>
      <Image
        src='https://www.laventanaweb.com/images/salon.jpg'
        alt='La Ventana interior'
        fill
        className='object-cover brightness-50'
      />
      <div className='absolute flex flex-col items-center space-y-2'>
        <Loader2 className='h-10 w-10 animate-spin text-white' />
        <p className='text-white font-medium'>{loadingText}</p>
      </div>
    </div>
  );
}
