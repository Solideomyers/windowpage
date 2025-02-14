import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
} from 'react-hook-form';

import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/shadcn/button';
import {
  ButtonVariant,
  ButtonRadius,
  ButtonHover
} from '@/components/ui/enums/button-variants.enum';
import { PaxValueForm } from './pax-value-form';

interface PaxInfoProps<T extends FieldValues> {
  control: Control<T>;
  setValue: UseFormSetValue<T>;
  adults: number;
  childrens: number;
  adultPrice: number;
  childrenPrice: number;
}

/**
 * PaxInfoForm component renders a form to manage the number of adults and children
 * in a booking, along with their respective prices.
 *
 * @template T - The type of the booking form data.
 * @param {Object} props - The properties object.
 * @param {Control<T>} props.control - The control object for form handling.
 * @param {Function} props.setValue - The function to set the value of the form fields.
 * @param {number} props.adults - The number of adults.
 * @param {number} props.childrens - The number of children.
 * @param {number} props.adultPrice - The price per adult.
 * @param {number} props.childrenPrice - The price per child.
 * @returns {JSX.Element} The rendered PaxInfoForm component.
 */
export const PaxInfoForm = <T extends BookingFormData>({
  control,
  setValue,
  adults,
  childrens,
  adultPrice,
  childrenPrice,
}: PaxInfoProps<T>): JSX.Element => {
  return (
    <>
      <div className='flex justify-between items-center p-4'>
        {/* adults */}
        <div className='flex flex-col items-center gap-4'>
          <span className='text-sm sm:text-base text-center'>
            {"Cantidad de adultos"}
          </span>
          <div className='flex items-center gap-6'>
            <Button
              variant={ButtonVariant.Outline}
              hover={ButtonHover.Dark}
              radius={ButtonRadius.Full}
              type='button'
              size='icon'
              onClick={() =>
                setValue(
                  'pax.adults' as Path<T>,
                  Math.max(1, adults - 1) as unknown as PathValue<T, Path<T>>
                )
              }
              className='border-accent-foreground/40'
            >
              <Minus className='h-3 w-3 sm:h-4 sm:w-4 stroke-[3px]' />
            </Button>

            {/* pax-adults */}
            <PaxValueForm control={control} controlName='pax.adults' />
            <Button
              variant={ButtonVariant.Outline}
              radius={ButtonRadius.Full}
              hover={ButtonHover.Dark}
              type='button'
              size='icon'
              onClick={() =>
                setValue(
                  'pax.adults' as Path<T>,
                  (adults + 1) as unknown as PathValue<T, Path<T>>
                )
              }
              className='border-accent-foreground/30'
            >
              <Plus className='h-3 w-3 sm:h-4 sm:w-4 stroke-[3px]' />
            </Button>
          </div>
          <span className='font-normal'>USD {adultPrice.toFixed(2)}</span>
        </div>

        {/* childrens */}
        <div className='flex flex-col items-center gap-4'>
          <span className='text-sm sm:text-base'>{"Cantidad de menores"}</span>
          <div className='flex items-center gap-4'>
            <Button
              variant={ButtonVariant.Outline}
              radius={ButtonRadius.Full}
              hover={ButtonHover.Dark}
              type='button'
              size='icon'
              onClick={() =>
                setValue(
                  'pax.childrens' as Path<T>,
                  Math.max(0, childrens - 1) as unknown as PathValue<T, Path<T>>
                )
              }
              className='border-accent-foreground/40'
            >
              <Minus className='h-3 w-3 sm:h-4 sm:w-4 stroke-[3px]' />
            </Button>

            {/* pax-childrens */}
            <PaxValueForm control={control} controlName='pax.childrens' />
            <Button
              variant={ButtonVariant.Outline}
              radius={ButtonRadius.Full}
              hover={ButtonHover.Dark}
              size={'icon'}
              type='button'
              onClick={() =>
                setValue(
                  'pax.childrens' as Path<T>,
                  (childrens + 1) as unknown as PathValue<T, Path<T>>
                )
              }
              className='border-accent-foreground/30'
            >
              <Plus className='h-3 w-3 sm:h-4 sm:w-4 stroke-[3px]' />
            </Button>
          </div>
          <span className='font-normal'>{"USD"} {childrenPrice.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};
