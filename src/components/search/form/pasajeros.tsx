'use client';

import { Controller, Control, FieldErrors } from 'react-hook-form';
import { SearchFormData } from '@/actions/search/types/search.types';
import { fontMontserrat } from '@/fonts/fonts';
import { FaUsers } from "react-icons/fa";
import {Input as InputTw} from '@/components/ui/shadcn/input'
import { useTranslations } from 'next-intl';
interface PasajerosInputProps {
  control: Control<SearchFormData>;
  errors: FieldErrors<SearchFormData>;
}

export const PassangersInput: React.FC<PasajerosInputProps> = ({
  control,
}) => {

  const t = useTranslations('HomePage.searchBooking')

  return (
    <Controller
      name='pasajeros'
      control={control}
      render={({ field }) => (
        <div className='w-full max-w-[100%] lg:max-w-[30%] flex flex-col gap-2'>
          <label
            htmlFor='pax_buscador'
            className={`mt-1 ${fontMontserrat.className} font-semibold uppercase truncate`}
          >
            {t('amount_pax')}
          </label>
          
          <InputTw
          type='number'
          value={field.value.toString()}
            onChange={(e) => field.onChange(Number(e.target.value))}
            className='font-montserrat'
          startContent={<FaUsers className='h-6 w-6 fill-gray-400 stroke-gray-500' />}
          />
        </div>
      )}
    />
  );
};
