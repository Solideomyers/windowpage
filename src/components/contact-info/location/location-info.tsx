import { Card, CardBody } from "@heroui/react";
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const LocationInfo = () => {
  const mapsLink = 'https://maps.google.com/...';

  const t = useTranslations('Contact-info');

  const renderLocationContent = () => (
    <div
      className={`
        lg:self-start
        
        flex
        flex-col 
        items-center
        lg:items-start
        lg:text-left 
        text-sm 
        uppercase 
        text-white 
        font-bold
        w-full 
        font-montserrat
      `}
    >
      <h3 className='mb-2 text-sm'>{t('location_info.title')}</h3>
      <address
        className='
          capitalize
          font-normal 
          text-center
          lg:items-start
          lg:text-left
          text-sm
          not-italic 
          flex
          flex-col 
          items-center 
          gap-1
        '
      >
        <span className='flex items-center lg:items-start gap-2'>
          Balcarce 431 - San Telmo
        </span>
        <span>
          {t('location_info.city')} - {t('location_info.country')}
        </span>
      </address>
    </div>
  );

  return (
    <section
      aria-labelledby='location-heading'
      className='location-info-container'
    >
      <Card
        className='
          max-w-[400px] 
          bg-pallete-black 
          text-white 
          hover:shadow-lg 
          transition-shadow 
          duration-300
        '
        aria-label='Información de Ubicación'
      >
        <CardBody>
          {mapsLink ? (
            <Link
              href={mapsLink}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Ver ubicación en Google Maps'
              className='block'
            >
              {renderLocationContent()}
            </Link>
          ) : (
            renderLocationContent()
          )}
        </CardBody>
      </Card>
    </section>
  );
};
