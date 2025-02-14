import { z } from 'zod';

export const CardSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'El título debe tener al menos 3 caracteres' }),
  availability: z
    .string()
    .min(1, { message: 'La disponibilidad no puede estar vacía' }),
  showTime: z.string().regex(/^\d{2}:\d{2}\s*hs$/, {
    message: 'El formato de hora debe ser HH:MM hs',
  }),
  price: z
    .number()
    .positive({ message: 'El precio debe ser un número positivo' }),
  currency: z.enum(['USD', 'ARS'], {
    errorMap: () => ({ message: 'La moneda debe ser USD o ARS' }),
  }),
  href: z.string(),
  // .url({ message: 'El enlace debe ser una URL válida' }),
  showId: z.string().min(1, { message: 'El ID del show es requerido' }),
});
