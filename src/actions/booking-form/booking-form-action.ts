'use server';

import { z } from 'zod';
import { bookingFormSchema } from './schemas/booking';
import { parseDate } from '@/lib/utils';
import { toast } from 'sonner';
import { BookingService } from '@/actions/booking-form/services/booking.service';
import { BookingRepository } from '@/actions/booking-form/repository/booking.repository';

const bookingService = new BookingService();
const bookingRepository = new BookingRepository(bookingService);

export const createBooking = async (formData: FormData) => {
  try {
    const fecha = formData.get('fecha');
    if (!fecha || typeof fecha !== 'string') {
      toast.error('Fecha inválida');
      throw new Error('Invalid date');
    }
    const parsedDate = parseDate(fecha);

    const data = {
      name: formData.get('name'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      whatsApp: formData.get('whatsApp'),
      motif: formData.get('motif'),
      code: formData.get('code') === 'true',
      discount: formData.get('discount'),
      fecha: parsedDate,
      hotel: formData.get('hotel'),
      pax: {
        adults: Number(formData.get('pax.adults')),
        childrens: Number(formData.get('pax.childrens')),
      },
      amount: Number(formData.get('amount')),
    };

    const parsedData = bookingFormSchema.parse(data);

    const result = await bookingRepository.bookingForm(parsedData);

    if (!result.success) {
      toast.error(result.message);
    }

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    console.error('Error en createBooking:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      };
    }

    return {
      success: false,
      message: 'Error al crear la reserva',
    };
  }
};
