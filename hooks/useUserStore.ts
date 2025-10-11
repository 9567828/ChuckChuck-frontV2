import { IUser } from "@/utils/tempUser";
import { create } from "zustand";

interface UserStore {
  user: IUser | null;
  setUser: (data: IUser | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (data: IUser | null) => set({ user: data }),
}));
