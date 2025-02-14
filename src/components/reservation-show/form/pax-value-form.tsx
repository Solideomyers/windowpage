import { BookingFormData } from "@/actions/booking-form/types/booking-form.types";
import { FormField, FormItem, FormControl } from "@/components/ui/shadcn/form";
import { Control, FieldValues, Path } from "react-hook-form";

interface PaxValueProps<T extends FieldValues> {
    control: Control<T>
    controlName: string
}

/**
 * A form component for displaying and controlling a value related to a booking form.
 *
 * @template T - The type of the booking form data.
 * @param {PaxValueProps<T>} props - The properties for the PaxValueForm component.
 * @param {Control<T>} props.control - The control object used to manage the form state.
 * @param {Path<T>} props.controlName - The name of the control field within the form data.
 * @returns {JSX.Element} The rendered PaxValueForm component.
 */
export const PaxValueForm = <T extends BookingFormData>({control, controlName}: PaxValueProps<T>) => {
    return (
      <>
        <FormField
          name={controlName as Path<T>}
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <span {...field} className='w-8 text-center'>
                  {String(field.value)}
                </span>
              </FormControl>
            </FormItem>
          )}
        />
      </>
    );
}