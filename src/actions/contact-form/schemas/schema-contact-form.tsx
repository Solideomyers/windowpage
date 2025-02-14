import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
  lastName: z.string().min(1, { message: 'El apellido es requerido' }),
  email: z
    .string()
    .email({ message: 'Ingresa un email válido' })
    .refine(
      (email) => {
        const emailDomainWhitelist = [
          'gmail.com',
          'hotmail.com',
          'outlook.com',
          'yahoo.com',
        ];
        const domain = email.split('@')[1];
        return emailDomainWhitelist.includes(domain);
      },
      { message: 'Dominio de email no permitido' }
    ),
  whatsApp: z.string().optional(),
  content: z.string().min(1, { message: 'El comentario es requerido' }),
  subscribe: z.boolean().optional().default(false),
});
