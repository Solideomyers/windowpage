
import { ContactForm } from '@/components/contact-form/contact-form';
import { getTranslations } from 'next-intl/server';

export const Consultas = async () => {
  const t = await getTranslations('Contact');

  return (
    <section
      id='form-contacto'
      className='bg-pallete-black pb-10 px-4 md:mx-0 md:min-h-[500px] min-h-[744px]'
    >
      <h4 className='text-white p-5 text-center tracking-wide uppercase font-bold font-montserrat text-xl'>
        {t('title')}
      </h4>

      <ContactForm />
    </section>
  );
};
