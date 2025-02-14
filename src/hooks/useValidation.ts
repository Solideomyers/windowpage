import { z } from 'zod';

export function useValidation<T extends z.ZodSchema>(schema: T) {
  const validate = (data: unknown) => {
    try {
      return schema.parse(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        }));
        return { errors: formattedErrors };
      }
      throw error;
    }
  };

  return { validate };
}
