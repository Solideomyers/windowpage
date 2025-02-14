import { z } from 'zod';

export const searchSchema = z.object({
  evento: z.string().min(1, { message: 'Selecciona un evento' }),
    fecha: z.date().nullable(),
  pasajeros: z
    .number()
    .positive({message: 'Debe haber al menos un pasajero'})
    .min(1, { message: 'Debe haber al menos un pasajero' })
    .max(20, { message: 'Máximo 20 pasajeros' }),
});

