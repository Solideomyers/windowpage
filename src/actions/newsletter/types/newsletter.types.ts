import { z } from 'zod';
import { newsletterSchema } from '../schemas/newsletter-schema';
import { FieldErrors } from 'react-hook-form';

export interface NewsletterSubscription {
  email: string;
  source?: 'web' | 'landing' | 'footer';
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'unsubscribed';
}

export interface SubscriptionResult {
  success: boolean;
  message: string;
  code?: string;
}

export type NewsletterSchemaType = z.infer<typeof newsletterSchema>;

export type NewsletterFormErrors = FieldErrors<NewsletterSchemaType>;
