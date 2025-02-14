import { z } from 'zod';
import { contactFormSchema } from '../schemas/schema-contact-form';
import { FieldErrors } from 'react-hook-form';

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFormErrors = FieldErrors<ContactFormData>;