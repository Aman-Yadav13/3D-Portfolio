import { create } from "zustand";

interface LoadingStore {
  isloading: boolean;
  onHide: () => void;
  onShow: () => void;
}

export const useLoading = create<LoadingStore>((set) => ({
  isloading: false,
  onHide: () => set(() => ({ isloading: false })),
  onShow: () => set(() => ({ isloading: true })),
}));
