'use client';

import { useSearch } from '@/actions/search/hooks/useSearch';
import { searchSchema } from '@/actions/search/schemas/search-schema';
import {
  SearchFormData,
  SearchFormErrors,
} from '@/actions/search/types/search.types';
import { useValidation } from '@/hooks/useValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@heroui/react";
import { FormProvider, useForm } from 'react-hook-form';
import { DropdownForm } from '@/components/ui/form/dropdown-form';
import { DateForm } from '@/components/ui/form/date-form';
import { PassangersInput } from '@/components/search/form/pasajeros';
import { getLocalTimeZone, today } from '@internationalized/date';
import { useRouter } from '@/i18n/routing';

import { LoaderCircle } from 'lucide-react';
import { formatDate, parseToPathUrl } from '@/lib/utils';
// import { useShowStore } from '@/store/showStore';
import { ButtonRadius } from '@/components/ui/enums/button-variants.enum';
import { useBookingStore } from '@/store/bookingStore';
import { useGetShows } from '@/hooks/query/useGetShows';
import { useFlash } from '@/providers/flash/flash';
import { useTranslations } from 'next-intl';

export const SearchForm: React.FC = () => {
  const { validate } = useValidation(searchSchema);
  const { search, loading } = useSearch();
  const router = useRouter();
  const { data, isLoading } = useGetShows();
  // const { shows } = useShowStore();
  const { setField } = useBookingStore();

  const t = useTranslations('HomePage.searchBooking');


  const todayDate = today(getLocalTimeZone());
  const initialDate = todayDate.toDate(getLocalTimeZone());

  const flash = useFlash();

  const methods = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      evento: '-VIP- CENA + SHOW + CLASES DE TANGO',
      fecha: initialDate,
      pasajeros: 0,
    },
  });

  const {
    reset,
    formState: { errors },
    control,
    setValue,
    handleSubmit,
  } = methods;

  const onSubmit = async (data: SearchFormData) => {
    const validationResult = validate(data);

    if ('errors' in validationResult) {
      console.error('Validation errors:', validationResult.errors);
      return;
    }

    const result = await search(data);

    if (result.success) {
      const evento = parseToPathUrl(data.evento);
      const fecha = data.fecha ? formatDate(data.fecha) : '';
      const pax = data.pasajeros;

      const url = `/reservation/${evento}?fecha=${fecha}&pax=${pax}`;
      setField('fecha', initialDate);
      flash.success('En progreso...', 'promise', 3000);
      router.push(url);
      reset();
    }
  };

  const onError = (errors: SearchFormErrors) => {
    Object.values(errors).forEach((error) => {
      flash.error(error.message || 'Error unknown', 3000);
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={`
          mt-6 
          grid 
          grid-cols-1
          gap-4 
          items-center 
          justify-center
          place-items-center 
          w-full
          lg:w-[60%]
          overflow-hidden 
          px-4
          `}
      >
        <div className='flex flex-col items-center sm:flex-row sm:items-baseline lg:justify-center gap-4 sm:px-4 w-full'>
          <DropdownForm
            radius={ButtonRadius.Lg}
            controlName='evento'
            control={control}
            setValue={setValue}
            data={!isLoading && data ? data : []}
            defaultValue={!isLoading && data ? data[0]?.name : ''}
            label={t('tipe_show')}
          />
          <DateForm
            label={t('date')}
            control={control}
            todayDate={initialDate}
          />
          <PassangersInput control={control} errors={errors} />
        </div>
        <Button
          type='submit'
          variant='solid'
          size='lg'
          radius='sm'
          isLoading={loading}
          spinner={
            <LoaderCircle className='animate-spin h-6 w-6 stroke-[4px] text-current' />
          }
          className='bg-pallete-black text-white flex-grow font-bold uppercase px-10 w-1/2 lg:w-1/6 text-lg font-montserrat tracking-wide'
        >
          {t('search')}
        </Button>
      </form>
    </FormProvider>
  );
};
