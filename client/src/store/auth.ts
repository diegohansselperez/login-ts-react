import { persist } from 'zustand/middleware';
import { create } from 'zustand';

type State = {
  token: string;
};

type Actions = {
  setToken: (token: string) => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      setToken: (token: string) =>
        set((state) => ({
          token,
        })),
    }),
    {
      name: 'auth',
    },
  ),
);
