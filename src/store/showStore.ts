import { Show } from '@/app/[locale]/api/shows/interfaces/show.interface';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface ShowStore {
  shows: Show[];
  setShows: (shows: Show[]) => void;
  addShow: (show: Show) => void;
  clearShows: () => void;
}

export const useShowStore = create<ShowStore>()(
  devtools(
    persist<ShowStore>(
      (set) => ({
        shows: [],
        setShows: (shows: Show[]) => {
          console.log({ store: shows });
          set((state) => ({ ...state, shows }));
        },
        addShow: (show: Show) => {
          set((state) => ({ shows: [...state.shows, show] }));
        },
        clearShows: () => {
          set(() => ({ shows: [] }));
        },
      }),
      { name: 'show-store' }
    )
  )
);
