import { HTMLInputTypeAttribute } from "react";
import { User } from "./graphql/typesAndHooks.generated";

export type AuthState = {
  user: User | null;
};

export type AuthActions = {
  setUser: (user: User) => void;
  resetUser: VoidFunction;
};

export type FilterField = {
  text: string;
  value: string;
};

export type Field = {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  className?: string | undefined;
  required?: boolean;
  min?: number;
};
