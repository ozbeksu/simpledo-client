import React from "react";
import { Checkbox, Delete } from "../index";

type TodoProps = {
  todoId: string;
  title: string;
  completed: boolean;
  onChecked: (id: string, state: boolean) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({
  todoId,
  title,
  completed,
  onChecked,
  onDelete,
}: TodoProps) {
  return (
    <div className="flex items-center w-full">
      <Checkbox
        checked={completed}
        onClick={() => onChecked(todoId, !completed)}
      />
      <span className="w-full">{title}</span>
      <Delete onClick={() => onDelete(todoId)} />
    </div>
  );
}
