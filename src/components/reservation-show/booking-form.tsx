import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useValidation } from '@/hooks/useValidation';
import { Button } from '@/components/ui/shadcn/button';
import { bookingFormSchema } from '@/actions/booking-form/schemas/booking';
import { cn } from '@/lib/utils';
import { PersonalInfoForm } from '@/components/reservation-show/form/personal-info-form';
import type {
  BookingFormData,
  BookingFormErrors,
} from '@/actions/booking-form/types/booking-form.types';

import { PaxInfoForm } from '@/components/reservation-show/form/pax-info-form';
import { Form } from '@/components/ui/shadcn/form';
import { CheckboxForm } from '@/components/reservation-show/form/checkbox-form';
import { LoaderCircle, ChevronRight } from 'lucide-react';
import { Discount } from '@/components/reservation-show/form/discount';
import { ButtonRadius } from '@/components/ui/enums/button-variants.enum';
import { useBookingStore } from '@/store/bookingStore';

import { useFlash } from '@/providers/flash/flash';

interface BookingFormProps {
  className?: string;
  dateInit: Date;
  pax?: number;
}

/**
 * BookingForm component handles the booking form for reservations.
 *
 * @param {object} props - The properties object.
 * @param {string} props.className - Additional class names for styling.
 * @param {Date} props.dateInit - The initial date for the booking.
 * @param {number} props.pax - The number of adults for the booking.
 *
 * @returns {JSX.Element} The rendered booking form component.
 *
 * @component
 *
 * @example
 * <BookingForm className="custom-class" dateInit={new Date()} pax={2} />
 *
 * @remarks
 * This component uses the `useForm` hook from `react-hook-form` for form handling,
 * and `zodResolver` for schema validation. It also utilizes custom hooks `useValidation`
 * and `useBookingForm` for validation and form submission respectively.
 *
 * The form includes personal information fields, pax information fields, and a discount code section.
 * It calculates the total price based on the number of adults and children, and applies a discount
 * for children under 10 years old.
 *
 * The form displays validation errors using toast notifications and shows a loading state while submitting.
 *
 * @see {@link https://react-hook-form.com/} for more information on `react-hook-form`.
 * @see {@link https://github.com/colinhacks/zod} for more information on `zod`.
 */
export const BookingForm = ({ className, dateInit }: BookingFormProps) => {
  const adultPrice = 190.0;
  const childPrice = 95.0;
  console.log('form');
  const { updateBookingData, bookingData } = useBookingStore.getState();

  const t = useTranslations('Ui');

  const { validate } = useValidation(bookingFormSchema);

  const methods = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      email: bookingData.email,
      name: bookingData.name,
      lastName: bookingData.lastName,
      fecha: bookingData.fecha,
      hotel: bookingData.hotel,
      code: bookingData.code,
      discount: bookingData.discount,
      motif: bookingData.motif,
      whatsApp: bookingData.whatsApp,
      pax: {
        adults: bookingData.pax.adults,
        childrens: bookingData.pax.childrens,
      },
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isDirty, isSubmitted },
  } = methods;

  const adults = watch('pax.adults');
  const childrens = watch('pax.childrens');
  const total = adults * adultPrice + childrens * childPrice;
  const errorDate = errors.fecha?.message;
  const fechaDate = watch('fecha');

  const flash = useFlash();

  console.log({ errorDate: errorDate, dateInit, fechaDate });

  useEffect(() => {
    setValue('amount', total);
  }, [adults, childrens, setValue, total]);

  const onSubmit = async (data: BookingFormData) => {
    const validationResult = validate(data);

    if ('errors' in validationResult) {
      console.error('Validation errors:', validationResult.errors);
      return;
    }

    updateBookingData({ ...data, showSummary: true });
    if (isSubmitted) {
      flash.success('Cargando la reserva...');
      console.log('reset');
    }
  };

  const onError = (errors: BookingFormErrors) => {
    Object.keys(errors).forEach((key) => {
      const error = errors[key as keyof BookingFormErrors];
      if (error) {
        flash.error(error.message || 'Unknown error');
      }
    });
  };

  const code = watch('code');

  return (
    <div
      className={cn(
        'p-4 sm:p-6 bg-white rounded-lg animate-fade-in',
        className
      )}
    >
      <Form {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className='space-y-3 sm:space-y-4'
        >
          <PersonalInfoForm
            dateInit={dateInit}
            control={control}
            errors={errors}
            setValue={setValue}
          />

          {/* group pax */}

          <PaxInfoForm
            control={control}
            setValue={setValue}
            adults={adults}
            childrens={childrens}
            adultPrice={adultPrice}
            childrenPrice={childPrice}
          />

          <div className='pt-4 border-t'>
            <div className='flex flex-col justify-between items-center gap-2 mb-4'>
              <span
                className={`text-xl font-extrabold uppercase font-montserrat tracking-wider sm:text-base`}
              >
                {t('pax.total_pay')}
              </span>
              <span className='font-bold text-sm'>
                USD <strong className='text-2xl'>{total}</strong>
              </span>
            </div>

            <div className='flex justify-center items-center space-x-2 mb-4'>
              {/* code discount */}
              <CheckboxForm control={control} controlName={'code'} />
              <label
                htmlFor='discount'
                className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                {t('pax.discount')}
              </label>
            </div>

            {code && (
              <Discount
                control={control}
                errors={errors}
                controlName='discount'
                label='Aplicar'
              />
            )}

            <div className='w-full flex justify-center items-center'>
              <Button
                type='submit'
                radius={ButtonRadius.Lg}
                disabled={!isDirty || isSubmitting}
                className='w-fit mt-4 px-4 bg-primary hover:bg-gold/90 text-black'
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className='mr-2 h-4 w-4 animate-spin' />
                    <span className='capitalize'>procesando...</span>
                  </>
                ) : (
                  <>
                    <span className='uppercase font-bold text-lg'>
                      {t('btn_next')}
                    </span>
                    <ChevronRight className='h-6 w-6' />
                  </>
                )}
              </Button>
            </div>

            <div className='flex flex-col gap-2 text-xs sm:text-sm text-center mt-4'>
              <p>MENORES DE 10 AÑOS 50% DE DESCUENTO</p>
              <p>
                Atención: De acuerdo a nuestras políticas de cancelación, si el
                servicio se cancela el mismo día o Ud. no se presenta esa misma
                noche con la reserva activa, no se realizaran reintegros. Puede
                cancelar 24 HS antes del Show.
              </p>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
