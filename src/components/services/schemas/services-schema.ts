import { z } from 'zod';

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: 'El name no puede estar vacío' }),
  alt: z.string({ message: 'El alt es obligatorio' }),
  href: z.string({ message: 'El href es obligatorio' }),
  src: z.string({ message: 'El src es obligatorio' }),
  mobile: z.boolean({
    message: 'El mobile es obligatorio para el renderizado',
  }),
  desktop: z.boolean().optional(),
});
