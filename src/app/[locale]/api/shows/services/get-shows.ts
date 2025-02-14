import { apiClient } from '@/app/[locale]/api/api-client';
import { Show } from '@/app/[locale]/api/shows/interfaces/show.interface';

export const getShows = async () => {
  return await apiClient.get<Show[]>('/show-lang');
};
