import { create } from "zustand";

type AuthStore = {
  authenticated: boolean;
  email: string | null;
  token: string | null;
  setAuth: (authenticated: boolean, email: string | null, token: string | null) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  authenticated: false,
  email: null,
  token: null,
  setAuth: (authenticated, email, token) => set({ authenticated, email, token }),
  clearAuth: () => set({ authenticated: false, email: null, token: null }),
}));
