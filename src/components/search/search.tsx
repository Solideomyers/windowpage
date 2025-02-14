import { SearchForm } from '@/components/search/search-form';
import { getTranslations } from 'next-intl/server';
export const Search = async () => {
  const t = await getTranslations('HomePage')
  
  return (
    <section id='buscador' className='bg-white pb-10'>
      <div className='w-11/12 sm:w-full mx-auto flex flex-col items-center'>
        <h1 className='md:text-2xl titulo text-center font-bold md:pt-8 py-4 text-base uppercase border-b'>
          {t('searchBooking.title')}
        </h1>

        <SearchForm />
      </div>
    </section>
  );
};
