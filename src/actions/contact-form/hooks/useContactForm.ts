import { useState } from 'react';
import { toast } from 'sonner';
import { createContact } from '@/actions/contact-form/contact-form-action';
import { createSubscribe } from '@/actions/newsletter/newsletter-action';
import { ContactFormData } from '../types/contact-form.types';
import { contactFormSchema } from '../schemas/schema-contact-form';

export function useContactForm() {
  const [loading, setLoading] = useState(false);

  const submitContact = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const result = contactFormSchema.safeParse(data);

      if (!result.success) {
        toast.error(result.error.errors[0].message);
        return { success: false, error: result.error.errors[0].message };
      }

      // data => formData
      const formData = new FormData();
      Object.entries(result.data).forEach(([key, value]) => {
        formData.append(key, value?.toString() || '');
      });

      // send newContact
      const contactResponse = await createContact(formData);

      if (contactResponse.success && result.data.subscribe) {
        try {
          await createSubscribe({
            email: result.data.email,
            source: 'web',
          });
          toast.success('Contacto enviado y suscripción realizada');
        } catch (subscribeError) {
          toast.warning(
            'Contacto enviado, pero hubo un problema con la suscripción'
          );
          console.error('Subscription error:', subscribeError);
        }
      } else if (contactResponse.success) {
        toast.success(contactResponse.message);
      } else {
        toast.error(contactResponse.message);
        return { success: false, error: contactResponse.message };
      }

      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Error inesperado al enviar el formulario';

      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { submitContact, loading };
}
