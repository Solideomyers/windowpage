'use client';

import { Control, Path, FieldValues } from 'react-hook-form';
import { SearchFormData } from '@/actions/search/types/search.types';
import { fontMontserrat } from '@/fonts/fonts';
import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';

import { DatePicker } from '@/components/ui/shadcn/datepicker';
import { ButtonVariant } from '@/components/ui/enums/button-variants.enum';
import { FormControl, FormField, FormItem } from '@/components/ui/shadcn/form';
import { usePathname } from 'next/navigation';

interface FechaPickerProps<T extends FieldValues> {
  control: Control<T>;
  todayDate: Date;
  label?: string;
  variant?: ButtonVariant;
  isLabel?: boolean;
  isIcon?: boolean;
}

/**
 * DateForm component for rendering a date picker within a form.
 *
 * @template T - The type of form data, extending either SearchFormData or BookingFormData.
 * @param {Object} props - The properties object.
 * @param {Control<T>} props.control - The control object for managing form state.
 * @param {Date} props.todayDate - The current date to be used for disabling past dates.
 * @param {boolean} [props.isLabel=true] - Flag to determine if the label should be displayed.
 * @param {boolean} [props.isIcon=true] - Flag to determine if the icon should be displayed.
 * @param {ButtonVariant} [props.variant=ButtonVariant.Outline] - The variant of the button.
 * @param {string} [props.label='label'] - The label text to be displayed.
 * @returns {JSX.Element} The rendered DateForm component.
 */
export const DateForm = <T extends SearchFormData | BookingFormData>({
  control,
  todayDate,
  isLabel = true,
  isIcon = true,
  variant = ButtonVariant.Outline,
  label = 'label',
}: FechaPickerProps<T>): JSX.Element => {
  const disableDates = (date: Date) => date < todayDate;
  const pathname = usePathname();

  return (
    <FormField
      name={'fecha' as Path<T>}
      control={control}
      render={({ field: { value, onChange } }) => (
        <FormItem
          className={` ${
            pathname?.includes('/reservation') ?? false
              ? 'lg:max-w-[50rem]'
              : 'w-full max-w-[30rem] lg:w-[100%] lg:max-w-[100%]'
          } `}
        >
          <FormControl>
            <div className='w-full max-w-[30rem] lg:max-w-[60rem] flex flex-col gap-2'>
              {isLabel && (
                <label
                  htmlFor='fecha_buscador'
                  className={`mt-1 ${fontMontserrat.className} font-semibold uppercase`}
                >
                  {label}
                </label>
              )}

              <DatePicker
                variant={variant}
                isIcon={isIcon}
                value={value instanceof Date ? value : null}
                onDisableDates={disableDates}
                onChange={onChange}
                todayDate={todayDate}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
