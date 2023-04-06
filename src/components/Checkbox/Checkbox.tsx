import "./Checkbox.scss";
import React, { useState } from "react";

type CheckboxProps = {
  id?: string | undefined;
  name?: string;
  checked: boolean;
  onClick: VoidFunction;
};

export default function Checkbox({
  id,
  name,
  checked,
  onClick,
}: CheckboxProps) {
  const [check, setCheck] = useState(checked);

  function handleClick() {
    setCheck(!check);
    onClick();
  }

  return (
    <input
      id={id}
      type="checkbox"
      name={name}
      checked={check}
      onChange={handleClick}
      className="checkbox"
    />
  );
}
