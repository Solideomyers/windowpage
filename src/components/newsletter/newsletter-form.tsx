'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';

import { Button, Input } from "@heroui/react";

import { useFlash } from '@/providers/flash/flash';

import { useValidation } from '@/hooks/useValidation';
import { useNewsletter } from '@/actions/newsletter/hooks/useNewsletter';
import { newsletterSchema } from '@/actions/newsletter/schemas/newsletter-schema';
import type {
  NewsletterFormErrors,
  NewsletterSchemaType,
} from '@/actions/newsletter/types/newsletter.types';
import { useTranslations } from 'next-intl';

export const NewsletterForm = () => {
  const { validate } = useValidation(newsletterSchema);
  const { subscribe } = useNewsletter();

  const t = useTranslations('Ui')

  const flash = useFlash();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterSchemaType>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
      source: 'web',
    },
  });

  const onSubmit = async (data: NewsletterSchemaType) => {
    const validationResult = validate(data);

    if ('errors' in validationResult) {
      console.error('Validation errors:', validationResult.errors);
      return;
    }

    const success = await subscribe(data.email);
    console.log({ success });
    if (success) {
      flash.success('¡Suscripción exitosa!');
      reset();
    }
  };

  const onError = (errors: NewsletterFormErrors) => {
    if (errors.email) {
      flash.error(errors.email?.message || 'Unknown error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      acceptCharset='UTF-8'
      id='frmSuscribir'
      role='form'
      className='w-full flex gap-2 items-baseline'
      noValidate={true}
    >
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type='email'
            label='Email'
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email}
            classNames={{
              base: 'border-gray-900 animate-delay-400 focus:border-gray-300',
            }}
            labelPlacement='inside'
            variant='underlined'
            required
            className='block placeholder-black py-2.5 px-4 w-full text-sm text-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 peer mt-0'
          />
        )}
      />

      <div className='flex items-end'>
        <Button
          type='submit'
          variant='solid'
          className='mb-2 text-black uppercase w-10/12 lg:w-10/12 focus:outline-none rounded-lg text-xl lg:text-lg px-8 py-4 mt-1 text-center bg-pallete-gold focus:bg-gold-light'
        >
          {t('btn_send')}
        </Button>
      </div>
    </form>
  );
};
