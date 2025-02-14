import { createSubscribe } from '@/actions/newsletter/newsletter-action';
import { newsletterSchema } from '@/actions/newsletter/schemas/newsletter-schema';
import { useState } from 'react';
import { toast } from 'sonner';

export function useNewsletter() {
  const [loading, setLoading] = useState(false);

  const subscribe = async (email: string) => {
    setLoading(true);

    try {
      const result = newsletterSchema.safeParse({
        email,
        source: 'web',
      });

      if (!result.success) {
        toast.error(result.error.errors[0].message);
        return false;
      }

      // server action
      const response = await createSubscribe(result.data);

      if (response.success) {
        return true;
      } else {
        toast.error(response.message);
        return false;
      }
    } catch (error) {

      if (error instanceof Error) {

        console.error('Newsletter subscription error:', error.message);

        if (error.message.includes('network')) {
          toast.error('Error de red. Por favor, comprueba tu conexión.');
        } else if (error.message.includes('invalid')) {
          toast.error('El email proporcionado no es válido.');
        } else {
          toast.error(`Error inesperado: ${error.message}`);
        }
      } else {

        toast.error('Ocurrió un error desconocido');
        console.error('Unexpected error type:', error);
      }

      return false;
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading };
}
