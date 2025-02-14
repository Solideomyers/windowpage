import React from 'react';

interface CardHeaderProps {
  title: string;
  showId: string;
  availability: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  showId,
  availability,
}) => {
  return (
    <div
      className={`
    rounded-t-xl
    bg-gradient-to-l 
    from-[#F5E286] 
    via-[#E8BE6C] 
    to-[#E8BE6C]
    text-xl
    text-center
    uppercase
    mb-4
    
    `}
    >
      <h3
        id={`card-title-${showId}`}
        className={`
          font-bold
          border-b-1
          border-pallete-anexo/10
          py-2
          
        `}
      >
        {title}
      </h3>
      <p className='text-black text-xs py-2'>{availability}</p>
    </div>
  );
};
