'use client'

import { GOOGLE_MAP_SRC, IFRAME_TITLE } from '@/constants/map/map';
import { isValidGoogleMapsUrl } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface GoogleMapProps {
  src?: string;
  title?: string;
  width?: string;
  height?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  src = GOOGLE_MAP_SRC,
  title = IFRAME_TITLE,
  width = 'w-full',
  height = 'h-96',
}) => {
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
   setIsValidUrl(isValidGoogleMapsUrl(src));
 }, [src]);

  if (!isValidUrl) {
    return (
      <div
        className={`${width} ${height} flex items-center justify-center bg-gray-100`}
      >
        <p className='text-red-500'>Mapa no disponible</p>
      </div>
    );
  }

  return (
    <div
      aria-label='Ubicacion de la Ventana - Mapa interactivo'
      role='region'
      className={`${width} ${height} relative`}
    >
      {!isLoaded && (
        <div className='absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center'>
          <span>Cargando mapa...</span>
        </div>
      )}
      <iframe
        src={src}
        referrerPolicy='no-referrer-when-downgrade'
        className={`w-full h-full border-0 ${
          isLoaded ? 'visible' : 'invisible'
        }`}
        allow='fullscreen'
        loading='lazy'
        title={title}
        aria-hidden='true'
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
