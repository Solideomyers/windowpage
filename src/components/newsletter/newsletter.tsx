'use client';

import Image from 'next/image';
import { NewsletterForm } from '@/components/newsletter/newsletter-form';
import { ErrorBoundary } from '@/components/errors/error-boundary';
import { TextHeading } from '@/components/ui/textheading';
import { useTranslations } from 'next-intl';

export const Newsletter: React.FC = () => {
  const t = useTranslations('NewsLetter');

  return (
    <section
      id='suscribe'
      className={`w-full border-t-1 border-none sm:border-none bg-[#f0f0f0] lg:bg-transparent flex justify-center py-4 md:mx-0 md:min-h-[100px] font-montserrat antialiased`}
    >
      <div
        className={`
          w-full
          bg-[#f0f0f0] 
        lg:bg-white
          sm:rounded-lg
          lg:rounded-l-lg
          sm:bg-transparent
          lg:shadow
        `}
      >
        <div className='w-full flex flex-col items-center lg:flex-row'>
          {/* first box */}
          <div
            className={`w-full lg:basis-1/2 flex flex-col justify-center items-center font-rubik tracking-wide`}
          >
            {/* title */}
            <TextHeading
              level={6}
              className='uppercase tracking-wide font-semibold'
            >
              {t('title')}
            </TextHeading>

            {/* form */}
            <div className='flex mt-0 sm:px-10 space-x-0 border-6 w-full'>
              <ErrorBoundary>
                <NewsletterForm />
              </ErrorBoundary>
            </div>
          </div>

          {/* flag - second box */}
          <div className='hidden lg:basis-1/2 lg:flex min-h-[150px]'>
            <div className='relative'>
              <Image
                data-src='https://www.laventanaweb.com/images/argentina-newsletter.jpg'
                alt='Argentina flag'
                className='h-full object-cover'
                src='https://www.laventanaweb.com/images/argentina-newsletter.jpg'
                priority
                loading='eager'
                quality={100}
                width={900}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
