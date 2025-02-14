import { FormControl, FormField, FormItem } from '@/components/ui/shadcn/form';
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';
import { Input } from "@heroui/react";
import { Button } from '@/components/ui/shadcn/button';
import { ButtonRadius } from '@/components/ui/enums/button-variants.enum';
import { fontRubik } from '@/fonts/fonts';

interface DiscountProps<T extends FieldValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
  controlName: string;
  label?: string;
}

/**
 * Discount component for handling discount code input in a booking form.
 *
 * @template T - The type of the booking form data.
 * @param {Object} props - The properties object.
 * @param {Control<T>} props.control - The control object for form handling.
 * @param {FieldErrors<T>} props.errors - The errors object for form validation.
 * @param {Path<T>} props.controlName - The name of the control field.
 * @param {string} props.label - The label for the discount input field.
 * @returns {JSX.Element} The rendered Discount component.
 */
export const Discount = <T extends BookingFormData>({
  control,
  errors,
  controlName,
  label,
}: DiscountProps<T>) => {
  return (
    <div className='w-full flex justify-center gap-2 items-baseline'>
      <FormField
        name={controlName as Path<T>}
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                value={String(field.value)}
                type={controlName}
                placeholder='Ingresa tu codigo'
                errorMessage={String(
                  errors[controlName as keyof FieldErrors<T>]?.message || ''
                )}
                isInvalid={!!errors[controlName as keyof FieldErrors<T>]}
                classNames={{
                  base: 'border-gray-900 animate-delay-400 focus:border-gray-300',
                }}
                variant='underlined'
                required
                className='block placeholder-black py-2.5 px-4 w-full text-sm text-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 peer mt-0'
              />
            </FormControl>
          </FormItem>
        )}
      />

      <div className='flex items-end'>
        <Button
          type='button'
          variant='black'
          radius={ButtonRadius.Lg}
          className={`px-4 py-4 text-white font-normal uppercase tracking-wide ${fontRubik.className}`}
        >
          {label || 'Aplicar'}
        </Button>
      </div>
    </div>
  );
};
