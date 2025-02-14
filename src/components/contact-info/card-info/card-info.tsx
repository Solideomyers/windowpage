import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardBody } from "@heroui/react";
import { RseModal } from '@/components/ui/modals/rse-modal';

import { AboutUsModal } from '@/components/ui/modals/about-modal';

interface CardInfoProps {
  imageSrc?: string;
  imageAlt?: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({
  imageSrc = '/info/laventana-footer.png',
  imageAlt = 'La Ventana Tango',
}) => {
  return (
    <section aria-labelledby='about-section'>
      <Card
        className={`
          py-4 
           bg-transparent
          aspect-auto 
          mx-auto 
          hover:shadow-lg 
          transition-shadow 
          duration-300
        `}
        aria-label='Información sobre La Ventana'
      >
        <CardBody
          className={`
            overflow-visible 
            py-2 
            flex 
            justify-center 
            items-center
          `}
        >
          <figure className='min-w-[200px] aspect-square flex justify-center'>
            <Image
              alt={imageAlt}
              className={`
                object-cover 
                rounded-xl 
                w-auto
                h-auto
                max-w-[100px] 
                transition-transform 
                duration-300 
                hover:scale-105
              `}
              src={imageSrc}
              width={400}
              height={1000}
              loading='lazy'
            />
          </figure>
        </CardBody>

        <CardHeader
          className={`
            pb-0 
            pt-2 
            px-4 
            flex-col 
            items-center
          `}
        >
          <AboutUsModal />
          <RseModal />
        </CardHeader>
      </Card>
    </section>
  );
};
