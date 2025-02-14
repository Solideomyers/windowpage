import { BookingService } from '@/actions/booking-form/services/booking.service';
import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';

export class BookingRepository {
  private bookingService: BookingService;

  constructor(bookingService: BookingService) {
    this.bookingService = bookingService;
  }

  async bookingForm(data: BookingFormData) {
    
    try {
      const response = await this.bookingService.performBooking(data);
      
      return {
        success: true,
        message: 'Reserva creada',
        data: response,
      }

    } catch (error) {
      console.error('Error en bookingRespository:', error)

      return {
        success: false,
        message: 'Error al crear la reserva',
        data: null,
      }
    }
  
  }
}
