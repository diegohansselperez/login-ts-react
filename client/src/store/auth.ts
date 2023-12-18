import { persist } from 'zustand/middleware';
import { create } from 'zustand';

type State = {
  token: string;
  profile: null | object;
  isAuth: boolean;
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
      isAuth: false,
      setToken: (token: string) =>
        set((state) => ({
          token,
          isAuth: true,
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
