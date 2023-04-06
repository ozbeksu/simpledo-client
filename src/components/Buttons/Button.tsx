import "./Button.scss";
import React, { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
  id?: string | undefined;
  className?: string | undefined;
};

export default function Button({
  text,
  onClick,
  id,
  type,
  className,
}: ButtonProps) {
  return (
    <button className={className} id={id} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
