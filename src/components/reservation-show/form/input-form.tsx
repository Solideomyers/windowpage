import { FormControl, FormField, FormItem } from '@/components/ui/shadcn/form';
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';
import { Input } from '@/components/ui/input';

interface PersonalInfoProps<T extends FieldValues> {
  control: Control<T>;
  errors: FieldErrors<T>;
  controlName: string;
  label?: string;
}

/**
 * InputForm component for rendering a form input field with validation.
 *
 * @template T - The type of the form data.
 * @param {Object} props - The properties object.
 * @param {Control<T>} props.control - The control object from react-hook-form.
 * @param {FieldErrors<T>} props.errors - The errors object from react-hook-form.
 * @param {Path<T>} props.controlName - The name of the control field.
 * @param {string} props.label - The label for the input field.
 * @returns {JSX.Element} The rendered input form field.
 */
export const InputForm = <T extends BookingFormData>({
  control,
  errors,
  controlName,
  label,
}: PersonalInfoProps<T>): JSX.Element => {
  return (
    <>
      {/* example => name */}
      <FormField
        name={controlName as Path<T>}
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                value={
                  field.value as unknown as
                    | string
                    | number
                    | readonly string[]
                    | undefined
                }
                label={label}
                isInvalid={!!errors[controlName as keyof FieldErrors<T>]}
                errorMessage={String(
                  errors[controlName as keyof FieldErrors<T>]?.message || ''
                )}
                className='w-full'
              />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};
