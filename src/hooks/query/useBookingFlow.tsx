'use client'
import { useBookingStore } from '@/store/bookingStore';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useBookingFlow = () => {
  const { submitBooking, isLoading, error } = useBookingStore();

  const bookingMutation = useMutation({
    mutationFn: submitBooking,
    onSuccess: (approvalUrl: string) => {
      if (approvalUrl) {
        // redirect to paypal
        window.location.href = approvalUrl;
      } else {
        toast.error('No se pudo obtener la URL de aprobacion');
      }
    },
    onError: (error) => {
      console.error('Error en el proceso de la reserva:', error);
      toast.error(
        'Ocurrion un error al procesar tu reserva. Intentalo mas tarde.'
      );
    },
  });

  return {
    ...bookingMutation,
    isLoading,
    error,
    startBooking: bookingMutation.mutate,
  };
};
