import type { Service } from '@/types';
import { ResponsiveServiceCard } from '@/components/services/responsive-card';
import { useTranslations } from 'next-intl';

interface ServiceGridProps {
  services: Service[];
  extend: string
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  extend
}) => { 

  const t = useTranslations('Services');


  return (
    <div className='flex flex-col'>
      <div
        className={`title-styles p-5
            flex
            w-full
            justify-center
            tracking-wider
            items-center
            text-center
            bg-white
            text-2xl
            antialiased
            font-rubik
            uppercase`}
      >
        {t('title')}
      </div>
      <div className={`responsive-container grid ${extend} bg-pallete-black`}>
        {services.map((service, i) => (
          <ResponsiveServiceCard key={i} service={service} />
        ))}
      </div>
    </div>
  );
}
