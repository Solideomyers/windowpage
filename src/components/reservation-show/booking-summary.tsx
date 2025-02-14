import { Card, CardContent } from '@/components/ui/shadcn/card';
import { Button } from '@/components/ui/shadcn/button';
import { ChevronLeft, CreditCard } from 'lucide-react';
import {
  ButtonRadius,
  ButtonVariant,
} from '@/components/ui/enums/button-variants.enum';
import { LogoPaypal } from '@/components/logo/paypal/logo-paypal';
import { useBookingStore } from '@/store/bookingStore';
// import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';
// import { useBookingForm } from '@/actions/booking-form/hooks/useBookingForm';
import { useBookingFlow } from '@/hooks/query/useBookingFlow';

export const BookingSummary: React.FC = () => {
  const { bookingData, toggleShowSummary } = useBookingStore();
  const {startBooking} = useBookingFlow()

  if (!bookingData) {
    return <>{"hola"}</>;
  }

  


  return (
    <Card className='w-full rounded-none bg-red-500'>
      <CardContent className='space-y-6 p-0'>
        {/* Personal Details */}
        <div className='space-y-2 p-6'>
          <div className='flex justify-start gap-2'>
            <span className=' text-gray-600'>{"Nombre:"}</span>
            <span>{bookingData.name}</span>
          </div>
          <div className='flex justify-start gap-2'>
            <span className='text-gray-600'>{"Apellido:"}</span>
            <span>{bookingData.lastName}</span>
          </div>
          <div className='flex justify-start gap-2'>
            <span className='text-gray-600'>{"Whatsapp:"}</span>
            <span>{bookingData.whatsApp}</span>
          </div>
          <div className='flex justify-start gap-2'>
            <span className='text-gray-600'>{"Email:"}</span>
            <span>{bookingData.email}</span>
          </div>
          <div className='flex justify-start gap-2'>
            <span className='text-gray-600'>{"Fecha:"}</span>
            <span>{bookingData.fecha.toLocaleDateString()}</span>
          </div>
          <div className='flex justify-start gap-2'>
            <span className='text-gray-600'>{"Hotel:"}</span>
            <span>{bookingData.hotel}</span>
          </div>
          <div className='flex justify-start gap-2'>
            <span className='text-gray-600'>{"Adultos:"}</span>
            <span>{bookingData.pax.adults}</span>
          </div>
          <div className='flex justify-start gap-2'>
            <span className='text-gray-600'>{"Menores:"}</span>
            <span>{bookingData.pax.childrens}</span>
          </div>
        </div>

        {/* Back Button */}
        <div className='w-full flex justify-center'>
          <Button
            variant={ButtonVariant.Default}
            radius={ButtonRadius.Lg}
            size={'lg'}
            onClick={() => toggleShowSummary()}
            className='bg-[#F3D078] hover:bg-[#F1C860] border-[#C89411] text-lg'
          >
            <ChevronLeft className='w-10 h-10' />
            {"ATRAS"}
          </Button>
        </div>

        {/* Payment Summary */}
        <div className='bg-gradient-to-r from-[#F5E286] via-[#F5E286] to-[#E8BE6C] p-4 w-full'>
          <div className='flex justify-center text-sm mb-4'>
            <span>{"Adultos x 1"}</span>
            <span>{"USD"} {bookingData.amount}</span>
          </div>
          <div className='flex flex-col items-center font-bold text-xl mb-4'>
            <span>{"TOTAL A PAGAR"}</span>
            <p>
              <span className='uppercase text-sm font-normal'>{"usd"}</span>
              <span className='text-xl font-bold'>{bookingData.amount}</span>
            </p>
          </div>

          {/* Payment Buttons */}
          <div className='space-y-3'>
            <Button
              variant={ButtonVariant.Default}
              radius={ButtonRadius.Lg}
              className='w-full h-12 bg-[#FFC439] hover:bg-[#F4B800] text-black'
              onClick={() => startBooking(bookingData)}
            >
              <LogoPaypal />
            </Button>
            <Button
              variant={ButtonVariant.Default}
              radius={ButtonRadius.Lg}
              className='w-full h-12 bg-[#2C2E2F] text-white hover:bg-[#1A1A1A]'
            >
              <CreditCard className='w-20 h-20' />
              {"Debit or Credit Card"}
            </Button>
            <div className='text-center text-sm text-gray-500 flex justify-center items-center gap-1'>
             {" Powered by"}
              <span className='w-16'>
                <LogoPaypal />
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
