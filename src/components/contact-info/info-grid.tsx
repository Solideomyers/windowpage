import { CardInfo } from '@/components/contact-info/card-info/card-info';
import { LocationInfo } from '@/components/contact-info/location/location-info';
import ReservationInfo from '@/components/contact-info/reservation/reservation-info';
import { ScheduleInfo } from '@/components/contact-info/schedule/schedule-info';

interface InfoGridProps {
  mainContainer?: string;
}

export const InfoGrid: React.FC<InfoGridProps> = ({
  mainContainer,
}) => {

  return (
    <div
      id='contacto'
      className='w-full bg-pallete-black py-4'
    >
          <div className={`
        
        ${mainContainer}
        `}>
        <div id='aboutus-info' className={`p-0 flex justify-center lg:justify-end w-full`}>
          <CardInfo />
        </div>
        <div
          id='schedules-info'
          className='p-0 w-full flex flex-col justify-center items-center lg:items-start'
        >
          <ScheduleInfo />
          <LocationInfo />
        </div>
        <div id='reservation-info' className='p-0 flex justify-center lg:justify-start w-full'>
          <ReservationInfo />
        </div>
      </div>
    </div>
  );
};