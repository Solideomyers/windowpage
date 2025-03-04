'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { TextHeading } from '@/components/ui/textheading';
import { BookingForm } from '@/components/reservation-show/booking-form';
import { ShowDetails } from '@/components/reservation-show/show-details';
import { parseToNormalText, parseDate } from '@/lib/utils';
import { useResponsive } from '@/hooks/useResponsive';
import { BookingSummary } from '@/components/reservation-show/booking-summary';
import { useBookingStore } from '@/store/bookingStore';
import { useTranslations } from 'next-intl';

export const NewShow: React.FC = () => {
  const queries = useSearchParams();
  const params = useParams();

  const show = params?.show?.toString();
  const fecha = queries ? queries.get('fecha') : null;
  const parsedDate = parseDate(fecha || '');
  console.log({ parseDate: parsedDate });
  const pax = queries ? Number(queries.get('pax')) : 0;

  const showNew = parseToNormalText(show || '');
  const { currentBreakpoint } = useResponsive();
  const levelText = currentBreakpoint === 'xs' ? 5 : 3;

  const { bookingData } = useBookingStore();
  const t = useTranslations('Bookings');

  return (
    <section className='mt-3 sm:mt-24'>
      <div className=''>
        <TextHeading
          className='bg-gradient-to-l from-[#F5E286] via-[#E8BE6C] to-[#E8BE6C] p-6 uppercase text-wrap font-semibold tracking-wide font-rubik border-b-1 border-accent-foreground/40'
          level={levelText}
        >
          {t('title')}
        </TextHeading>{' '}
        <div className='w-full flex justify-center'>
          <div className='w-full flex flex-col items-center sm:my-6 lg:m-6 lg:w-7/12 lg:shadow-sm lg:border lg: border-muted'>
            <TextHeading
              className='w-full bg-gradient-to-l from-[#F5E286] via-[#E8BE6C] to-[#E8BE6C] p-6 uppercase text-balance font-semibold font-rubik'
              level={levelText}
            >
              {showNew}
            </TextHeading>
            <div>
              {bookingData?.showSummary ? (
                <div className='max-w-full mx-auto bg-yellow-300'>
                  <BookingSummary />
                </div>
              ) : (
                <div className='max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-0'>
                  <BookingForm dateInit={parsedDate} pax={pax} className='' />
                  <ShowDetails show={showNew} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
