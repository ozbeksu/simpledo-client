import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../components";

export default function MainLayout() {
  return (
    <div className="box box-radius bg-shadow bg-white">
      <Logo />
      <Outlet />
    </div>
  );
}
