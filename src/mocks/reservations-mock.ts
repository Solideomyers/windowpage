import { CardSchema } from '@/components/reservations/schemas/reserva-schema';
import { z } from 'zod';

export const mockReservations: z.infer<typeof CardSchema>[] = [
  {
    title: 'Show de Tango Clásico',
    availability: 'Disponible todos los días',
    showTime: '22:00 hs',
    price: 150,
    currency: 'USD',
    href: 'tango-clasico',
    showId: 'show-clasico-001',
  },
  {
    title: 'Show de Tango Clásico',
    availability: 'Disponible todos los días',
    showTime: '22:00 hs',
    price: 150,
    currency: 'USD',
    href: 'tango-clasico',
    showId: 'show-clasico-001',
  },
  {
    title: 'Show de Tango Clásico',
    availability: 'Disponible todos los días',
    showTime: '22:00 hs',
    price: 150,
    currency: 'USD',
    href: 'tango-clasico',
    showId: 'show-clasico-001',
  },
  {
    title: 'Experiencia VIP Premium',
    availability: 'Reserva anticipada',
    showTime: '20:30 hs',
    price: 250,
    currency: 'USD',
    href: 'vip-premium',
    showId: 'show-vip-002',
  },
  {
    title: 'Milonga Nocturna',
    availability: 'Jueves y sábados',
    showTime: '23:00 hs',
    price: 100,
    currency: 'ARS',
    href: 'milonga-nocturna',
    showId: 'show-milonga-003',
  },
  {
    title: 'Clase de Tango + Show',
    availability: 'Grupos reducidos',
    showTime: '19:00 hs',
    price: 180,
    currency: 'USD',
    href: 'clase-show',
    showId: 'show-clase-004',
  },
  {
    title: 'Cena y Espectáculo',
    availability: 'Todos los días',
    showTime: '21:30 hs',
    price: 200,
    currency: 'USD',
    href: 'cena-espectaculo',
    showId: 'show-cena-005',
  },
  {
    title: 'Tour de Tango Histórico',
    availability: 'Fines de semana',
    showTime: '18:00 hs',
    price: 120,
    currency: 'ARS',
    href: 'tour-historico',
    showId: 'show-tour-006',
  },
];

// get random reservation
export const getRandomReservations = (
  count: number = 3
): z.infer<typeof CardSchema>[] => {
  return mockReservations.sort(() => 0.5 - Math.random()).slice(0, count);
};

// get reservation ID
export const getReservationById = (showId: string) => {
  return mockReservations.find((reservation) => reservation.showId === showId);
};
