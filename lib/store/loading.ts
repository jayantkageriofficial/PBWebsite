import { create } from "zustand";

type LoadingStore = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
};

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: true,
  setLoading: (loading) => set({ isLoading: loading }),
}));
