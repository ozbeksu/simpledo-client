import React from "react";
import { Todo } from "../../graphql/typesAndHooks.generated";
import { TodoItem } from "../index";

type TodoListProps = {
  items?: Todo[];
  onChecked: (id: string, state: boolean) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({
  items,
  onChecked,
  onDelete,
}: TodoListProps) {
  return (
    <div className="scrollable pr-2">
      {items?.map(({ id, title, completed }: Todo) => (
        <TodoItem
          key={id}
          todoId={id}
          title={title}
          completed={completed}
          onChecked={onChecked}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
