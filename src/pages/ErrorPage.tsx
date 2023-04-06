import React from "react";
import { useRouteError } from "react-router-dom";
import { Content } from "../components";

type RouteError = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error: RouteError = useRouteError() as RouteError;
  console.error(error);

  return (
    <Content title="Oops!">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Content>
  );
}
