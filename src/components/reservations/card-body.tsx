import React from 'react';

interface CardBodyProps {
  availability?: string;
  showTime: string;
  price: number;
  currency: string;
}

export const CardBody: React.FC<CardBodyProps> = ({
  showTime,
  price,
  currency,
}) => {
  return (
    <div className='space-y-0 mb-4 px-4 flex justify-between'>
      <article >
        <p className='text-gray-600'>
          <span className='font-semibold capitalize mr-1'>degustacion:</span>{' '}
          <span className='uppercase'>{showTime}</span>
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold capitalize mr-1'>cena:</span>{' '}
          <span className='uppercase'>{showTime}</span>
        </p>
        <p className='text-gray-600'>
          <span className='font-semibold capitalize mr-1'>show:</span>{' '}
          <span className='uppercase'>{showTime}</span>
        </p>
      </article>
      <article className='flex flex-col justify-stretch m-0 p-0 items-end'>
        <p className='flex items-baseline gap-0'>
          <span className='font-normal text-sm uppercase leading-3'>{currency}</span>
          <span className='font-bold text-[28.8px] leading-3'>{price}</span>
        </p>
        <span className='text-sm p-0 leading-3 tracking-wide'>por persona</span>
      </article>
    </div>
  );
};
