import React from "react";
import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ProtectedProps = {
  children: JSX.Element | null;
};

export default function Protected({ children }: ProtectedProps) {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useLocalStorage("token", null);

  return token ? children : <Navigate to="/login" state={{ from }} replace />;
}
