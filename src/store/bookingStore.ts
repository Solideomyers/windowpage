// import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';
// import { create } from 'zustand';

// interface BookingStore {
//   bookingData: BookingFormData | null;
//   setBookingData: (data: BookingFormData) => void;
// }

// export const useBookingStore = create<BookingStore>((set) => ({
//   bookingData: null,
//   setBookingData: (data) => set({ bookingData: data }),
// }));

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { z } from 'zod';
import { bookingFormSchema } from '@/actions/booking-form/schemas/booking';
import { createBooking } from '@/actions/booking-form/booking-form-action';
import { createFormData } from '@/actions/booking-form/create-form-data';

export type BookingFormData = z.infer<typeof bookingFormSchema>;

const initialBookingData: BookingFormData = {
  fecha: new Date(),
  name: '',
  lastName: '',
  email: '',
  whatsApp: undefined,
  hotel: undefined,
  motif: undefined,
  code: false,
  discount: undefined,
  pax: { adults: 1, childrens: 0 },
  amount: 0,
  showSummary: false,
  approvalUrl: '',
};

interface BookingStore {
  bookingData: BookingFormData;
  setField: <K extends keyof BookingFormData>(
    key: K,
    value: BookingFormData[K]
  ) => void;
  toggleShowSummary: () => void;
  resetBookingData: () => void;
  updateBookingData: (data: BookingFormData) => void;
  submitBooking: (formData: BookingFormData) => Promise<string>;
  isLoading: boolean;
  error: string | null;
}

export const useBookingStore = create<BookingStore>()(
  immer((set) => ({
    bookingData: initialBookingData,
    isLoading: false,
    error: null,

    setField: (key, value) =>
      set((state) => {
        state.bookingData[key] = value;
      }),
    updateBookingData: (data: BookingFormData) =>
      set((state) => {
        state.bookingData = { ...state.bookingData, ...data };
      }),
    submitBooking: async (formData: BookingFormData) => {
      set({ isLoading: true, error: null });

      try {

        const parseData = createFormData(formData)
        // execute action
        const result = await createBooking(parseData);

        if (result.success && result?.data?.approvalUrl) {
          set((state) => {
            state.bookingData = initialBookingData;
          });
          return result.data?.approvalUrl;
        } else {
          set({ error: result.message || 'Error al crear la reserva' });
          throw new Error(result.message || 'Error al crear la reserva')
        }
      } catch (error) {
        console.error('Error en el proceso de la reserva:', error);
        set({ error: 'Ocurrio un error al procesar la reserva' });
        throw error;
      } finally {
        set({ isLoading: false });
      }
    },

    toggleShowSummary: () =>
      set((state) => {
        state.bookingData.showSummary = !state.bookingData.showSummary;
      }),

    resetBookingData: () =>
      set((state) => {
        state.bookingData = initialBookingData;
      }),
  }))
);
