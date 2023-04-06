import React from "react";

type LoadingProps = {
  loading: boolean;
};

export default function Loading({ loading }: LoadingProps) {
  if (!loading) return null;

  return <p>Loading...</p>;
}
