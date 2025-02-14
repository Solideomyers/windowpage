import { z } from 'zod';

export const bookingFormSchema = z.object({
  fecha: z.date().min(new Date(), { message: 'La fecha no puede ser anterior a hoy' }),
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
  hotel: z.string().optional(),
  motif: z.string().optional(),
  code:z.boolean().default(false).optional(),
  discount: z.string().optional(),
  pax: z.object({
    adults: z.number().int().min(1, { message: 'Debe haber al menos un adulto' }),
    childrens: z.number().int().min(0, { message: 'El número de niños no puede ser negativo' }),
  }),
  amount: z.number().int(),
  showSummary: z.boolean().default(false),
  approvalUrl: z.string().default('')
});
