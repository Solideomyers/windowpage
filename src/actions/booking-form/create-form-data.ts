import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';

export const createFormData = (data: BookingFormData): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (key === 'pax' && typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([paxKey, paxValue]) => {
        formData.append(`pax.${paxKey}`, Number(paxValue).toString());
      });
    } 
    else {
      formData.append(key, value?.toString() || '');
    }
  });

  return formData;
};
