import { create } from "zustand";
import { User } from "../graphql/typesAndHooks.generated";
import { AuthActions, AuthState } from "../types";

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  resetUser: () => set({ user: null }),
}));
