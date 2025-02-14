'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, Button, Spacer } from "@heroui/react";
import { ChevronRight, ChevronLeft, Star } from '@/components/icons';
import { Review } from '@/components/reviews/review';
import { useTranslations } from 'next-intl';

const reviewsData = [
  'Excelente desde la decoración hasta la atención. Muy amplia variedad de platos para todos los gustos, muy bien elaborados. Hermoso escenario.',
  'La comida es deliciosa y pueden ajustarse para ofrecer opciones veganas. Recomiendo la ubicación VIP, vale cada centavo por la cercanía al escenario.',
  'Una gran experiencia con deliciosos alimentos, música y un increíble espectáculo de tango. Muchas gracias.',
  'Maravillosa velada con una sorprendente cena de bistec en un lugar histórico.',
];

const AUTO_SLIDE_INTERVAL = 5000;

export const Reviews: React.FC = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  },[]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [handleNext]);

  const t = useTranslations('Reviews');


  return (
    <section
      id='opiniones'
      className='w-full grid grid-cols-1 place-content-center place-items-center p-0 lg:py-8 bg-white lg:bg-transparent'
    >
      <div
        className={`  
    
            col-span-full
            grid
            grid-cols-1
            md:grid-cols-2
            place-content-center
            place-items-center
            font-montserrat
            antialiased
            lg:bg-white 
            lg:border-2
            lg:shadow-sm
            rounded-xl
            `}
      >
        <header className='text-center bg-transparent lg:bg-white'>
          <Card shadow='none' className='p-2 bg-transparent'>
            <h2
              className='text-md lg:text-xl font-bold uppercase w-full'
              aria-label='Opiniones de nuestros pasajeros'
            >
              {t('title')}
            </h2>
            <div className='flex justify-center items-center mt-2'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className='fill-yellow-400 hover:fill-white hover:text-white text-yellow-400 w-6 h-6 mx-0.5'
                  aria-hidden='true'
                />
              ))}
            </div>
            <Spacer y={0.5} />
            <p className='text-sm text-gray-500 uppercase'>{ t('subTitle')}</p>
            <h3 className='text-2xl font-extrabold m-0'>4,9</h3>
          </Card>
        </header>

        <Card shadow='none' className='overflow-hidden w-full bg-transparent lg:bg-white'>
          <div className='flex items-center justify-between p-4'>
            <Button
              radius='full'
              isIconOnly
              onPress={handlePrev}
              aria-label='Mostrar opinión anterior'
              className='rounded-full bg-gray-300 hover:bg-gray-600 duration-300 delay-500 transition-colors ease-in'
            >
              <ChevronLeft width={30} className='fill-white' />
            </Button>
            <div
              className='flex-1 text-center'
              aria-live='polite'
              aria-atomic='true'
            >
              <Review text={reviewsData[currentIndex]} />
            </div>
            <Button
              radius='full'
              isIconOnly
              onPress={handleNext}
              aria-label='Mostrar opinión siguiente'
              className='rounded-full bg-gray-300 hover:bg-gray-600 duration-300 delay-300 transition-colors ease-in'
            >
              <ChevronRight width={30} className='fill-white' />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

