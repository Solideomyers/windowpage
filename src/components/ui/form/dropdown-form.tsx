'use client';

import { Control, UseFormSetValue, FieldValues, Path } from 'react-hook-form';
import { Button } from '@/components/ui/shadcn/button';
import { SearchFormData } from '@/actions/search/types/search.types';
import { useEventoSelection } from '@/components/search/hooks/useEventoSelect';

import { fontMontserrat } from '@/fonts/fonts';
import { TicketCheck as FaTicketSimple } from 'lucide-react';
import { ChevronDown as BiSolidChevronDown } from 'lucide-react';
import {
  ButtonRadius,
  ButtonVariant,
} from '@/components/ui/enums/button-variants.enum';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/shadcn/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/shadcn/command';
import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';
import { FormControl, FormField, FormItem } from '@/components/ui/shadcn/form';
import { Show } from '@/app/[locale]/api/shows/interfaces/show.interface';

// type Evento = {
//   name: string;
//   value: string;
// };

interface EventosDropdownProps<T extends FieldValues> {
  control: Control<T>;
  setValue: UseFormSetValue<T>;
  isLabel?: boolean;
  label?: string;
  isIcon?: boolean;
  controlName: string;
  data: Show[];
  defaultValue?: string;
  variant?: ButtonVariant;
  radius?: ButtonRadius;
}

/**
 * DropdownForm component renders a dropdown form field with customizable options.
 * 
 * @template T - The type of form data, extending either SearchFormData or BookingFormData.
 * 
 * @param {object} props - The properties object.
 * @param {Control<T>} props.control - The control object for form state management.
 * @param {Function} props.setValue - The function to set the value of the form field.
 * @param {Array} props.data - The array of data items to populate the dropdown.
 * @param {string} props.controlName - The name of the control field.
 * @param {boolean} [props.isLabel=true] - Flag to determine if the label should be displayed.
 * @param {string} [props.label='label'] - The text for the label.
 * @param {boolean} [props.isIcon=true] - Flag to determine if the icon should be displayed.
 * @param {string} [props.defaultValue] - The default value for the dropdown.
 * @param {ButtonVariant} [props.variant=ButtonVariant.Outline] - The variant style of the button.
 * @param {ButtonRadius} [props.radius=ButtonRadius.Default] - The radius style of the button.
 * 
 * @returns {JSX.Element} The rendered DropdownForm component.
 */
export const DropdownForm = <T extends SearchFormData | BookingFormData>({
  control,
  setValue,
  data,
  controlName,
  isLabel = true,
  label = 'label',
  isIcon = true,
  defaultValue,
  variant = ButtonVariant.Outline,
  radius = ButtonRadius.Default,
}: EventosDropdownProps<T>): JSX.Element => {
  const { handleEventoSelect, selectedEventoName, open, setOpen } =
    useEventoSelection({
      control,
      setValue,
      controlName,
      data,
      defaultValue,
    });

  return (
    <FormField
      name={controlName as Path<T>}
      control={control}
      render={() => (
        <FormItem className='w-full max-w-[30rem] lg:max-w-[60rem]'>
          <FormControl>
            <div className='flex flex-col gap-2 items-center w-full max-w-[30rem] lg:max-w-[60rem]'>
              {isLabel && (
                <label
                  htmlFor='idShow'
                  className={`mt-1 ${fontMontserrat.className} font-semibold uppercase text-satrt w-full`}
                >
                  {label}
                </label>
              )}
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant={variant}
                    radius={radius}
                    role='combobox'
                    aria-expanded={open}
                    className='w-full justify-between'
                  >
                    <span className='flex items-center gap-4 font-montserrat text-black font-normal uppercase truncate'>
                      {isIcon && (
                        <FaTicketSimple className='stroke-gray-400 fill-gray-400 h-6 w-6' />
                      )}
                      {selectedEventoName || defaultValue}
                    </span>
                    {isIcon && <BiSolidChevronDown className='opacity-50' />}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-full p-0'>
                  <Command>
                    <CommandInput placeholder={defaultValue} className='h-9' />
                    <CommandList>
                      <CommandEmpty>No existe el evento.</CommandEmpty>
                      <CommandGroup>
                        {data.map((item) => (
                          <CommandItem
                            key={item.name}
                            value={item.name}
                            onSelect={handleEventoSelect}
                          >
                            <span className='flex justify-center text-responsive-base text-center text-balance lg:text-balance lg:justify-start text-black uppercase'>
                              {item.name}
                            </span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
