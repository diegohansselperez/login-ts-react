import { persist } from 'zustand/middleware';
import { create } from 'zustand';

type State = {
  token: string;
  profile: null | object;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: null | object) => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      profile: null,
      setToken: (token: string) =>
        set((state) => ({
          token,
        })),
      setProfile: (profile: null | object) =>
        set((state) => ({
          profile,
        })),
    }),
    {
      name: 'auth',
    },
  ),
);
