import { DropdownForm } from '@/components/ui/form/dropdown-form';
import { DateForm } from '@/components/ui/form/date-form';
import { InputForm } from '@/components/reservation-show/form/input-form';
import {
  ButtonRadius,
  ButtonVariant,
} from '@/components/ui/enums/button-variants.enum';
import {
  Control,
  FieldValues,
  FieldErrors,
  UseFormSetValue,
} from 'react-hook-form';
import { BookingFormData } from '@/actions/booking-form/types/booking-form.types';
import { visitas } from '@/components/search/mock/data';

interface PersonalInfoProps<T extends FieldValues> {
  dateInit: Date;
  control: Control<T>;
  errors: FieldErrors<T>;
  setValue: UseFormSetValue<T>;
}

/**
 * PersonalInfoForm component renders a form for collecting personal information
 * for a booking. It includes fields for date of visit, name, last name, email,
 * WhatsApp number, hotel, and the reason for the visit.
 *
 * @template T - The type of the booking form data.
 * @param {Object} props - The properties object.
 * @param {Control<T>} props.control - The control object for managing form state.
 * @param {FieldErrors<T>} props.errors - The errors object for form validation.
 * @param {UseFormSetValue<T>} props.setValue - The function to set form values.
 * @param {Date} props.dateInit - The initial date for the date picker.
 * @returns {JSX.Element} The rendered PersonalInfoForm component.
 */
export const PersonalInfoForm = <T extends BookingFormData>({
  control,
  errors,
  setValue,
  dateInit,
}: PersonalInfoProps<T>): JSX.Element => {
  return (
    <>
      <div>
        {/* date */}
        <label className='block text-sm font-medium mb-1'>
          {"Fecha de su visita"}
        </label>
        <DateForm
          variant={ButtonVariant.Underline}
          isIcon={false}
          isLabel={false}
          control={control}
          todayDate={dateInit}
        />
      </div>

      {/* name */}
      <InputForm
        control={control}
        controlName='name'
        label='Nombre'
        errors={errors}
      />

      {/* lastName */}
      <InputForm
        control={control}
        controlName='lastName'
        label='Apellido'
        errors={errors}
      />

      {/* email */}
      <InputForm
        control={control}
        controlName='email'
        label='Email'
        errors={errors}
      />

      {/* wsp */}
      <InputForm
        control={control}
        controlName='whatsApp'
        label='WhatsApp'
        errors={errors}
      />

      {/* hotel */}
      <InputForm
        control={control}
        controlName='hotel'
        label='Hotel'
        errors={errors}
      />

      {/* motif */}
      <div>
        <label className='block text-sm font-medium mb-1'>
          {"Motivo de su visita"}
        </label>
        <DropdownForm
          variant={ButtonVariant.Underline}
          radius={ButtonRadius.None}
          isLabel={false}
          isIcon={false}
          controlName='motif'
          data={visitas}
          control={control}
          setValue={setValue}
          defaultValue='Aniversario...'
        />
      </div>
    </>
  );
};
