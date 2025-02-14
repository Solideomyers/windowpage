import { FormControl, FormField, FormItem } from '@/components/ui/shadcn/form';
import { Control, FieldValues, Path } from 'react-hook-form';
import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';
import { Checkbox } from '@/components/ui/shadcn/checkbox';

interface CheckboxFormProps<T extends FieldValues> {
  control: Control<T>;
  controlName: string;
}

/**
 * CheckboxForm component renders a form field with a checkbox.
 * 
 * @template T - The type of the form data.
 * @param {CheckboxFormProps<T>} props - The props for the CheckboxForm component.
 * @param {Control<T>} props.control - The control object from react-hook-form.
 * @param {Path<T>} props.controlName - The name of the control field.
 * 
 * @returns {JSX.Element} The rendered CheckboxForm component.
 */
export const CheckboxForm = <T extends BookingFormData>({
  control,
  controlName,
}: CheckboxFormProps<T>): JSX.Element => {
  return (
    <>
      {/* example => discount */}
      <FormField
        name={controlName as Path<T>}
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Checkbox
                id='discount'
                checked={!!field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};
