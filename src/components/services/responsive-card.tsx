import type { Service } from '@/types';
import Link from 'next/link';
import { CustomImg } from '@/components/custom/custom-img';

export const ResponsiveServiceCard: React.FC<{ service: Service }> = ({
  service,
}) => {
  return (
    <div
      className={`
        flex 
         w-full
        justify-center 
        p-1
        transition-all 
        duration-300 
        hover:scale-105 
        ${service.mobile ? 'flex ' : 'hidden lg:flex'}
      `}
    >
      <Link prefetch href={service.href} target='_blank'>
        <CustomImg
          src={service.src}
          alt={service.alt}
          width={1000}
          height={1000}
          extend={`
        flex
        justify-center
        w-full
        aspect-square 
        object-cover
        `}
        />
      </Link>
      {/* <h3 className='responsive-text mt-4'>{service.name}</h3> */}
    </div>
  );
};
