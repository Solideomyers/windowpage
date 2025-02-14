import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';

export class BookingService {
  async performBooking(data: BookingFormData) {
    // api

    // const response = await fetch('/backend', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })

    // if (!response.ok) {
    //   throw new Error('Error al registrar la reserva')
    // }

    // const result = await response.json()
    // console.log({ bookingResponse: result })
    
    // return result

    // const result = {
    //   success: true,
    //   message:'Reserva creada',
    //   data: {
    //     email: data.email,
    //     fecha: data.fecha,
    //     hotel: data.hotel,
    //     motif: data.motif,
    //     name: data.name,
    //     code: data.code,
    //     discount: data.discount,
    //     lastName: data.lastName,
    //     phone: data.whatsApp,
    //     pax: {
    //       adult: data.pax.adults,
    //       children: data.pax.childrens,
    //     },
    //     amount: data.amount,
    //     approvalUrl: data.approvalUrl
    //   },
    // };

    const result = { ...data, approvalUrl: '/validurl' }
    console.log({ service: result });
    return result;
  }

  async createPaypalOrder(amount: number) {
    const response = await fetch('/backend/createorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount }),

    })

    if (!response.ok) {
      throw new Error('Error al crear la orden')
    }

    const result = await response.json()
    console.log({ orderResponse: result })

    return result.approvalUrl
  }

}
