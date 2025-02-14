'use client';

import { Card } from './card';
import { useState } from 'react';
import {
  getRandomReservations,
  mockReservations,
} from '@/mocks/reservations-mock';
import { getLocalTimeZone, today } from '@internationalized/date';
import { formatDate } from '@/lib/utils';
import { TextHeading } from '@/components/ui/textheading';
import {useResponsive} from '@/hooks/useResponsive'
import { useTranslations } from 'next-intl';

export const Reservations: React.FC = () => {
  const todayDate = today(getLocalTimeZone());
  const formatToday = todayDate.toDate(getLocalTimeZone());
const dateUrl = formatDate(formatToday)
  const [reservations, setReservations] = useState(mockReservations);

  const handleRandomSelection = () => {
    setReservations(getRandomReservations());
  };

const {currentBreakpoint} = useResponsive()
const levelText = currentBreakpoint === 'xs' ? 6 : 3

  const t = useTranslations('Bookings')
  
  
  return (
    <div id='reservas' className='container bg-[#f0f0f0]'>
      <div
        className={`
        flex
        justify-center
        items-center
        gap-4
        my-auto
        pt-4
        px-4
        
        `}
      >
        <TextHeading
          className='uppercase font-semibold tracking-wider text-wrap'
          level={levelText}
        >
          {t('title')}

        </TextHeading>
        <button
          onClick={handleRandomSelection}
          className='hidden bg-black text-white px-4 py-2 rounded'
        >
          Selección Aleatoria
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:p-2 my-10'>
        {reservations.map((reservation, idx) => (
          <Card
          key={`id-${idx}-${reservation.showId.padStart(3, '0')}`}
            href={`/reservation/${reservation.href}?fecha=${dateUrl}&pax=1`}
            currency={reservation.currency}
            price={reservation.price}
            title={reservation.title}
            showTime={reservation.showTime}
            availability={reservation.availability}
            showId={reservation.showId}
          />
        ))}
      </div>
    </div>
  );
};
