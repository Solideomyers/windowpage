import { SearchFormData } from '@/actions/search/types/search.types';
import { useCallback, useMemo, useState } from 'react';
import { Control, FieldValues, Path, PathValue, UseFormSetValue, useWatch } from 'react-hook-form';
import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';
import { Show } from '@/api/shows/interfaces/show.interface';

// type Evento = {
//   name:string
//   value: string
// }
interface SelectionProps <T extends FieldValues> {
  control: Control<T>;
  setValue: UseFormSetValue<T>;
  controlName: string;
  data: Show[]
  defaultValue?: string;
}

/**
 * Custom hook to manage the selection of an event.
 *
 * @template T - The type of the form data, which extends either SearchFormData or BookingFormData.
 * @param {SelectionProps<T>} props - The properties required for the hook.
 * @param {Control<T>} props.control - The control object from react-hook-form.
 * @param {Function} props.setValue - The function to set the value of the form field.
 * @param {Array<{name: string, value: string}>} props.data - The array of event data to select from.
 * @param {string} props.defaultValue - The default value to display when no event is selected.
 * @param {string} props.controlName - The name of the control field.
 * @returns {Object} - An object containing the selected event name, the function to handle event selection, and the state and setter for the open state.
 * @returns {string} selectedEventoName - The name of the selected event.
 * @returns {Function} handleEventoSelect - The function to handle the selection of an event.
 * @returns {boolean} open - The state indicating whether the selection dropdown is open.
 * @returns {Function} setOpen - The function to set the open state.
 */
export const useEventoSelection = <T extends SearchFormData | BookingFormData>({control, setValue, data, defaultValue, controlName}:SelectionProps<T>) =>{
const [open, setOpen] = useState(false)

  const eventoValue = useWatch({
    control,
    name: controlName as Path<T>, 
  });

  const handleEventoSelect = useCallback(
    (key: React.Key) => {
      setValue(controlName as Path<T>, key.toString() as PathValue<T, Path<T>>, {
        shouldValidate: true,
        shouldDirty: true,
      });
      setOpen(false);
    },
    [setValue, controlName]
  );
  const selectedEventoName = useMemo(() => {
    return (
      data.find((e) => e.name === eventoValue)?.name ||
      defaultValue
    );
  }, [eventoValue, data, defaultValue]);

  
  return {
    selectedEventoName,
    handleEventoSelect,
    open,
    setOpen
  };
}
