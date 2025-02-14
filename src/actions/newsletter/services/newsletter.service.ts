import { DUPLICATE_SUBSCRIPTION, SUBSCRIPTION_ERROR } from '@/actions/newsletter/constans';
import type {
    NewsletterSchemaType,
  NewsletterSubscription,
  SubscriptionResult,
} from '@/actions/newsletter/types/newsletter.types';

export class NewsletterService {
  private subscriptions: NewsletterSubscription[] = [];

  async subscribe(data: NewsletterSchemaType): Promise<SubscriptionResult> {
    try {
      const existingSubscription = this.subscriptions.find(
        (sub) => sub.email === data.email
      );

      if (existingSubscription) {
        return {
          success: false,
          message: 'Email ya registrado',
          code: DUPLICATE_SUBSCRIPTION,
        };
      }

      const newSubscription: NewsletterSubscription = {
        email: data.email,
        source: data.source,
        timestamp: new Date(),
        status: 'pending',
      };

      this.subscriptions.push(newSubscription);

      // email services or DB

      return {
        success: true,
        message: 'Suscripción exitosa',
      };
    } catch (error) {

      if (error instanceof Error) {
        console.error('Newsletter subscription error:', error.message);

        if (error.message.includes('Email ya registrado')) {
          return {
            success: false,
            message: 'El email ya está suscrito',
            code: DUPLICATE_SUBSCRIPTION,
          };
        }

        if (error.message.includes('inválidos')) {
          return {
            success: false,
            message: 'Datos de suscripción inválidos',
            code: 'INVALID_DATA',
          };
        }

        return {
          success: false,
          message: error.message || 'Error en suscripción',
          code: SUBSCRIPTION_ERROR,
        };
      }

      console.error('Unexpected error in newsletter subscription:', error);
      return {
        success: false,
        message: 'Error inesperado en la suscripción',
        code: SUBSCRIPTION_ERROR,
      };
    }
  }
}
