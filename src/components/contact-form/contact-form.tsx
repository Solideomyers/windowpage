'use client';

import { Button } from "@heroui/react";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea as TextareaCustom } from '@/components/ui/textarea';
import { useValidation } from '@/hooks/useValidation';
import { contactFormSchema } from '@/actions/contact-form/schemas/schema-contact-form';
import { useContactForm } from '@/actions/contact-form/hooks/useContactForm';
import {
  ContactFormData,
  ContactFormErrors,
} from '@/actions/contact-form/types/contact-form.types';
import { Input as CustomInput } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { useFlash } from '@/providers/flash/flash';

export const ContactForm = () => {
  const { validate } = useValidation(contactFormSchema);
  const { submitContact } = useContactForm();

  const flash = useFlash()
  const t = useTranslations('Ui')

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      whatsApp: '',
      content: '',
      subscribe: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const validationResult = validate(data);

    if ('errors' in validationResult) {
      console.error('Validation errors:', validationResult.errors);
      return;
    }

    const result = await submitContact(data);

    if (result.success) {
      reset();
    }
  };

  const onError = (errors: ContactFormErrors) => {
    if (errors.name) {
      flash.error(errors.name?.message || 'Unknown error',3000);
    }
    if (errors.lastName) {
      flash.error(errors.lastName?.message || 'Unknown error',3000);
    }
    if (errors.email) {
      flash.error(errors.email?.message || 'Unknown error',3000);
    }
    if (errors.content) {
      flash.error(errors.content?.message || 'Unknown error',3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      acceptCharset='UTF-8'
      id='frmContacto'
      role='form'
      className='max-w-[960px] mx-auto pt-[20px] animate__animated'
      noValidate
    >
      <div className='grid sm:grid-cols-2 gap-6'>
        <div>
          <div className='relative z-0 w-full mb-8 text-white group'>
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label={t('form.first_name')}
                  variant='underlined-dark'
                  isInvalid={!!errors.name}
                  errorMessage={errors.name?.message}
                />
              )}
            />
          </div>
          <div className='relative z-0 w-full mb-8 text-white group'>
            <Controller
              name='lastName'
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label={t('form.last_name')}
                  variant='underlined-dark'
                  isInvalid={!!errors.lastName}
                  errorMessage={errors.lastName?.message}
                />
              )}
            />
          </div>
          <div className='relative z-0 w-full mb-8 text-white group'>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label={t('form.email')}
                  variant='underlined-dark'
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                />
              )}
            />
          </div>
          <div className='relative z-0 w-full mb-8  group'>
            <Controller
              name='whatsApp'
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label={t('form.whatsapp')}
                  variant='underlined-dark'
                  isInvalid={!!errors.whatsApp}
                  errorMessage={errors.whatsApp?.message}
                />
              )}
            />
          </div>
        </div>

        <div>
          <div className='flex flex-col justify-between gap-4 z-0 w-full mb-6 group'>
            <label
              htmlFor='comentario'
              className=' text-white font-bold font-montserrat tracking-wide'
            >
              {t('form.comment')}
            </label>
            <Controller
              name='content'
              control={control}
              render={({ field }) => (
                <TextareaCustom
                  {...field}
                  isInvalid={!!errors.content}
                  errorMessage={errors.content?.message}
                />
              )}
            />
          </div>

          <div className='mb-10'>
            <Controller
              name='subscribe'
              control={control}
              render={({ field: { value, onChange, ref } }) => (
                <input
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  ref={ref}
                  id='checked-checkbox'
                  type='checkbox'
                  className='mr-2 border-3 text-center text-blue-600 bg-gray-100 border-gray-300'
                />
              )}
            />

            <label htmlFor='checked-checkbox' className='text-white'>
              {t('form.to_subscribe')}
            </label>
          </div>

          <Button
            type='submit'
            variant='solid'
            className={`text-black uppercase border text-center bg-pallete-gold focus:bg-gold-light focus:outline-none font-large font-bold font-montserrat rounded-lg text-xl w-full sm:w-auto px-5 py-2`}
          >
            {t('btn_send')}
          </Button>
        </div>
      </div>
    </form>
  );
};
