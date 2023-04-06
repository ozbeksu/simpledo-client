import React from "react";
import { FilterField } from "../../types";
import { TextButton } from "../index";

type TodoFiltersProps = {
  current: string;
  fields: FilterField[];
  onClick: (value: string) => void;
};

export default function TodoFilters({
  current,
  fields,
  onClick,
}: TodoFiltersProps) {
  return (
    <div className="mt-4 mb-2">
      <span className="muted-text">Show:</span>
      {fields.map(({ value, text }) => (
        <TextButton
          key={value}
          text={text}
          isActive={current === value}
          onClick={() => onClick(value)}
        />
      ))}
    </div>
  );
}
