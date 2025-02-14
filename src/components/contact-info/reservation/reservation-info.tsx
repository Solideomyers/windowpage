'use client';

import { Card, CardBody, CardHeader } from "@heroui/react";

import { SocialMedia } from '@/components/contact-info/social-media/social-media';
import {
  ContactMethodLink,
  contactMethods,
} from '@/components/contact-info/reservation/reservation-methods';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

const ReservationInfo: React.FC = () => {
  const pathname = usePathname();

  const t = useTranslations('Contact-info');

  return (
    <div>
      <Card className='bg-transparent max-w-[400px] text-white px-2'>
        {!pathname?.includes('/menu') && (
          <CardHeader>
            <div
              className={cn(
                'flex justify-center lg:justify-start uppercase w-full font-bold leading-relaxed font-montserrat text-responsive-base'
              )}
            >
              <p className='font-bold'>{t('booking_info.title')}</p>
            </div>
          </CardHeader>
        )}
        <CardBody className='p-0'>
          <nav
            aria-label='methods contact'
            className='flex flex-col items-center gap-1'
          >
            {contactMethods.map((method) => (
              <ContactMethodLink key={method.type} {...method} />
            ))}
          </nav>
        </CardBody>
      </Card>
      <SocialMedia />
    </div>
  );
};

export default ReservationInfo;
