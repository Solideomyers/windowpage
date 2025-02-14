import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { bookingFormSchema } from '../schemas/booking';
import { createBooking } from '../booking-form-action';
import { createFormData } from '@/actions/booking-form/create-form-data';

export function useBookingForm() {
  const [loading, setLoading] = useState(false);

  const bookingForm = useCallback(
    async (data: unknown) => {
      setLoading(true);

      try {
        const parseData = bookingFormSchema.safeParse(data);

        if (!parseData.success) {
          console.log('error here', parseData.error.errors[0].message);
          toast.error(parseData.error.errors[0].message);
          return { success: false, error: parseData.error.errors[0].message };
        }

        const formData = createFormData(parseData.data);

        // execute action
        return await createBooking(formData);


      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'Error inesperado en la reserva';

        toast.error(errorMessage);
        return { success: false, error: errorMessage };
      } finally {
        setLoading(false);
      }
    },

    []
  );
  return { bookingForm, loading };
}
