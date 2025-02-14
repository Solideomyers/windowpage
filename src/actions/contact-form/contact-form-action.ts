'use server';

import { createSubscribe } from '../newsletter/newsletter-action';
import { contactFormSchema } from './schemas/schema-contact-form';
import {z} from 'zod'

export const createContact = async (formData: FormData) => {
  try {
    const data = {
      name: formData.get('name'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      whatsApp: formData.get('whatsApp'),
      content: formData.get('content'),
      subscribe: formData.get('subscribe') === 'true',
    };

    const parsedData = contactFormSchema.parse(data);

    // create

    // implement action newsletter
    if (parsedData.subscribe) {
      await createSubscribe({
        email: parsedData.email,
        source: 'web',
      });
    }

    return {
      success: true,
      message: 'Consulta enviada con éxito',
      data: parsedData,
    };
  } catch (error) {
    console.error('Error en createContact:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      };
    }

    return {
      success: false,
      message: 'Error al procesar la consulta',
    };
  }
};