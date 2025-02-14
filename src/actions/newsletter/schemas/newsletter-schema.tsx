import { z } from 'zod';

const emailDomainWhitelist = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com',
];

export const newsletterSchema = z.object({
  email: z
    .string({ required_error: 'Email es requerido' })
    .trim()
    .toLowerCase()
    .email('Formato de email inválido')
    .refine(
      (email) => {
        const domain = email.split('@')[1];
        return emailDomainWhitelist.includes(domain);
      },
      { message: 'Dominio de email no permitido' }
    )
    .refine(
      (email) => {
        // avoid emails pishing
        const disposableDomains = ['temp-mail.org', 'yopmail.com'];
        return !disposableDomains.some((domain) => email.includes(domain));
      },
      { message: 'Email desechable no permitido' }
    ),
  source: z.enum(['web', 'landing', 'footer']).default('web'),
});
