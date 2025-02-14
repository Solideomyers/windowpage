interface ScheduleItem {
  label: string;
  time: string;
}

export const ScheduleData: React.FC<ScheduleItem> = ({
  label,
  time,
}) => {
  return (
    <p
      className='
        flex
        flex-wrap
        lg:flex-nowrap
        justify-center
        items-center 
        gap-1 
        capitalize 
        py-1  
        sm:truncate
      '
    >
      <strong className='font-semibold'>{label}:</strong>
      <span className='uppercase'>{time}</span>
    </p>
  );
};
