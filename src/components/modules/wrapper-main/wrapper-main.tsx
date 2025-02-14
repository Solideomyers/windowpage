
import { Newsletter } from '@/components/newsletter/newsletter';
import { Reservations } from '@/components/reservations/reservations';
import { Reviews } from '@/components/reviews/reviews';

interface WrapperMainProps {
  children?: React.ReactNode;
  className?: string;
}

export const WrapperMain: React.FC<WrapperMainProps> = ({
  children,
  className= ''
}) => {


  return (
    <div className={`flex justify-center lg:bg-[#f0f0f0] ${className}`}>
      <div className='lg:w-7/12 xl:w-10/12 h-fit flex flex-col items-center w-full'>
        <Reservations/>
        <Reviews />
        <Newsletter />
        {children}
      </div>
    </div>
  );
};
