'use client';

import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { CardHeader } from '@/components/reservations/card-header';
import { CardBody } from '@/components/reservations/card-body';
import { CardFooter } from '@/components/reservations/card-footer';
import { CardSchema } from '@/components/reservations/schemas/reserva-schema';
import { CardValidationErrors } from '@/components/reservations/validation/card-validation-error';

type CardProps = z.infer<typeof CardSchema>;

export const Card: React.FC<CardProps> = ({
  title,
  availability,
  showTime,
  price,
  currency,
  href,
  showId,
}) => {
  const [validationErrors, setValidationErrors] = useState<z.ZodError | null>(
    null
  );

  const validateProps = () => {
    try {
      CardSchema.parse({
        title,
        availability,
        showTime,
        price,
        currency,
        href,
        showId,
      });
      setValidationErrors(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setValidationErrors(error);
        error.errors.forEach((item) => {
  
          console.error('Validation Errors:', item);
})
      }
    }
  };

  useEffect(() => {
    validateProps();
  });

  if (validationErrors) {
    return <CardValidationErrors errors={validationErrors} />;
  }

  return (
    <div
      className='bg-white shadow-sm rounded-xl'
      aria-labelledby={`card-title-${showId}`}
      data-testid='reservation-card'
    >
      <CardHeader title={title} showId={showId} availability={availability} />

      <CardBody
        availability={availability}
        showTime={showTime}
        price={price}
        currency={currency}
      />

      <CardFooter title={title} href={href} />
    </div>
  );
};
