

import { getLocalTimeZone } from '@internationalized/date';
import {RiTimeZoneFill } from 'react-icons/ri';

export const CalendarFooter: React.FC = () => {
  return (
    <div className='flex items-center justify-center gap-2 w-[stretch] bg-primary p-2 rounded-lg'>
      <RiTimeZoneFill className='h-8 w-8 fill-gray-500' />
      {getLocalTimeZone()}
    </div>
  );
};
