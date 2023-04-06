import React, { MouseEventHandler } from "react";

type DeleteProps = {
  onClick: MouseEventHandler<HTMLImageElement>;
};

export default function Delete({ onClick }: DeleteProps) {
  return <img src="delete.svg" alt="Delete" onClick={onClick} />;
}
