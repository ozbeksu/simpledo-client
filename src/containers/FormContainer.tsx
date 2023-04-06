import React, { ChangeEvent, ReactNode, useState } from "react";
import { Input, Button } from "../components";
import { Field } from "../types";

type FormProps<T> = {
  initialState: T;
  fields: Field[];
  buttonText: string;
  onSubmit: (formState: T) => void;
  children?: ReactNode;
};

const FormContainer = <T,>({
  initialState,
  fields,
  buttonText,
  onSubmit,
  children,
}: FormProps<T>) => {
  const [formState, setFormState] = useState<T>(initialState);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <div className="my-4">
        {fields.map(({ name, type, placeholder, className, value }: Field) => (
          <Input
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={handleChange}
          />
        ))}
        {children}
      </div>

      <Button
        type="button"
        text={buttonText}
        onClick={() => onSubmit(formState)}
      />
    </>
  );
};

export default FormContainer;
