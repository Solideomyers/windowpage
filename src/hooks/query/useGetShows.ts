'use client';

import { Show } from '@/app/[locale]/api/shows/interfaces/show.interface';
import { getShows } from '@/app/[locale]/api/shows/services/get-shows';
import { useShowStore } from '@/store/showStore';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useGetShows = () => {
  const setShows = useShowStore((state) => state.setShows);

  const queryOptions: UseQueryOptions<Show[], Error> = {
    queryKey: ['shows'],
    queryFn: getShows,
    placeholderData: [
      {
        id: 1,
        showId: 1,
        langId: 1,
        name: 'Amazing Show',
        desc: 'An amazing performance.',
        degustationTitle: null,
        degustationDesc: null,
        lessonTitle: null,
        lessonDesc: null,
        dinerTitle: null,
        dinerDesc: null,
        createdAt: '2025-01-06T18:21:38.532Z',
        updatedAt: '2025-01-06T18:21:38.532Z',
      },
    ],
    onSuccess: (data: Show[]) => {
      setShows(data);
    },
    onError: (error: Error) => {
      console.error('Error fetching shows:', error);
    },
    staleTime: 5 * 60 * 1000, 
    cacheTime: 5 * 60 * 1000, 
  } as UseQueryOptions<Show[], Error>;

  return useQuery<Show[], Error>(queryOptions);
};
