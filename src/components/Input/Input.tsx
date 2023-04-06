import "./Input.scss";
import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
} from "react";

type InputProps = {
  name: string;
  type: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string | ReadonlyArray<string> | number;
  className?: string;
  required?: boolean;
  min?: number;
};

export default function Input({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  required,
  onChange,
  onKeyUp,
  className,
  min,
}: InputProps) {
  return (
    <label>
      {label}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        className={`input ${className}`}
        onChange={onChange}
        onKeyUp={onKeyUp}
        min={min}
      />
    </label>
  );
}
