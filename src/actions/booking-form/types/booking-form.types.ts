import { z } from 'zod';
import { FieldErrors } from 'react-hook-form';
import { bookingFormSchema } from '@/actions/booking-form/schemas/booking';

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export type BookingFormErrors = FieldErrors<BookingFormData>;
