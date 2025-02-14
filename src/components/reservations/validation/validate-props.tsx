import { z } from 'zod';
import { CardSchema } from '../schemas/reserva-schema';

type CardProps = z.infer<typeof CardSchema>;

export const validateCardProps = (props: CardProps) => {
  try {
    return CardSchema.parse(props);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation Errors:', error.errors);
      return false;
    }
    return false;
  }
};
