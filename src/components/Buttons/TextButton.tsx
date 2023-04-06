import "./TextButton.scss";
import React from "react";

type TextButtonProps = {
  text: string;
  isActive: boolean;
  onClick: VoidFunction;
};

export default function TextButton({
  text,
  isActive,
  onClick,
}: TextButtonProps) {
  return (
    <span
      onClick={onClick}
      className={isActive ? `text-button active` : `text-button`}
    >
      {text}
    </span>
  );
}
