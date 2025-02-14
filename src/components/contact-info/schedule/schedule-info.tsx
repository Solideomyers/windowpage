'use client';

import { useTranslations } from 'next-intl';
import { Card, CardBody } from "@heroui/react";
import { ScheduleData } from '@/components/contact-info/schedule/schedule-data';
interface ScheduleItem {
  label: string;
  time: string;
}

export const ScheduleInfo = () => {
  const t = useTranslations('Contact-info');

  const scheduleItems: ScheduleItem[] = [
    { label: t('schedule_info.title'), time: '10:00 a 23:30 hs' },
    { label: t('schedule_info.tango_lesson'), time: '19:00 a 20:00 hs' },
    { label: t('schedule_info.tasting_cellar'), time: '19:00 a 20:00 hs' },
    { label: t('schedule_info.dinner'), time: '20:00 hs' },
    { label: t('schedule_info.show'), time: '22:00 hs' },
  ];

  return (
    <section aria-labelledby='schedule-heading'>
      <Card
        className={`
        bg-transparent
        tracking-wide 
        text-white
        `}
      >
        <CardBody>
          <header className='flex flex-col lg:items-start lg:text-left font-monttserrat'>
            <h2
              id='schedule-heading'
              className={`
              text-sm
              text-center
              
              uppercase
              font-bold
              font-montserrat
              
              `}
            >
              {t('schedule_info.title')}
            </h2>
          </header>
          <div
            className={`
            flex
            flex-col
            items-center
            text-center
            text-white
            text-responsive-base
            lg:items-start
            lg:text-left
            text-sm
            w-full
            `}
          >
            {scheduleItems.map((item, idx) => (
              <ScheduleData key={idx} label={item.label} time={item.time} />
            ))}
          </div>
        </CardBody>
      </Card>
    </section>
  );
};
