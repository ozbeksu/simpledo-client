import React, { ReactNode } from "react";
import { Alert } from "./index";
import { ApolloError } from "@apollo/client";

type ContentProps = {
  title?: string;
  subTitle?: string;
  error?: ApolloError | string;
  children?: ReactNode;
};

export default function Content({
  title,
  subTitle,
  error,
  children,
}: ContentProps) {
  return (
    <div className="flex flex-col">
      {title && <h1 className="title">{title}</h1>}
      {subTitle && <h2 className="sub-title">{subTitle}</h2>}

      {error && <Alert message={`Error: ${error}`} status="error" />}

      {children}
    </div>
  );
}
