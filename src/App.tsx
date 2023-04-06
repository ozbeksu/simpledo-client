import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Register, Todos, ProtectedPage } from "./pages/";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedPage>
              <Todos />
            </ProtectedPage>
          }
        />
      </Route>
    </Routes>
  );
}
