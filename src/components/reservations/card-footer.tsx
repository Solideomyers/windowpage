import React from 'react';
import Link from 'next/link';
import { Button } from "@heroui/react";
import { fontMontserrat } from '@/fonts/fonts';
import clsx from 'clsx';

interface CardFooterProps {
  title: string;
  href: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  title,
  href,
}) => {
  return (
    <div className='flex justify-between items-center p-4'>
      <Link
        href={href}
        className={clsx(
          `text-pallete-gold/90 px-2 py-2 rounded tracking-wide font-bold transition`,
          `${fontMontserrat.className}`
        )}
        aria-label={`Ver detalles de ${title}`}
      >
        +Ver detalle
      </Link>
      <Button
        variant='solid'
        radius='sm'
        as={Link}
        href={href}
        size='lg'
        className={clsx(
          'bg-pallete-gold text-black font-normal tracking-wide uppercase text-xl px-4 py-2 hover:bg-gold-light transition'
        , `${fontMontserrat.className}`)}
        aria-label={`Ver detalles de ${title}`}
        type='button'
      >
        reservar
      </Button>
    </div>
  );
};
