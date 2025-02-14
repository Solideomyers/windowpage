import React from 'react';
import { z } from 'zod';

interface CardValidationErrorsProps {
  errors: z.ZodError;
}

export const CardValidationErrors: React.FC<CardValidationErrorsProps> = ({
  errors,
}) => {
  return (
    <div
      className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
      role='alert'
    >
      <strong className='font-bold'>Errores de Validación</strong>
      <ul className='mt-2'>
        {errors.errors.map((error, index) => (
          <li key={index} className='text-sm'>
            {error.message}
          </li>
        ))}
      </ul>
    </div>
  );
};
