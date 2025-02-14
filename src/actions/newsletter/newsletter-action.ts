'use server';

import { ServerRateLimiter } from '@/lib/rate-limiter';
import { getClientIp } from '@/lib/get-client-ip';
import { NewsletterService } from './services/newsletter.service';
import { newsletterSchema } from './schemas/newsletter-schema';

const newsletterService = new NewsletterService();
const rateLimiter = new ServerRateLimiter();

export async function createSubscribe(data: unknown) {
  const ip = await getClientIp();

  // rate limiting por IP
  if (!rateLimiter.check(ip, { limit: 3, window: 60 })) {
    return {
      success: false,
      message: 'Demasiadas solicitudes. Intenta más tarde.',
    };
  }

  const result = newsletterSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    };
  }

  return newsletterService.subscribe(result.data);
}
