import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import { Todo } from "../graphql/typesAndHooks.generated";
import { Input, Loading, TodoFilters, TodoList } from "../components";

type TodosContainerProps = {
  data: Todo[];
  loading: boolean;
  onStatus: (id: string, state: boolean) => void;
  onDelete: (id: string) => void;
  onInput: ChangeEventHandler<HTMLInputElement>;
  onKeyUp: KeyboardEventHandler<HTMLInputElement>;
};

export default function TodosContainer({
  data,
  loading,
  onInput,
  onStatus,
  onDelete,
  onKeyUp,
}: TodosContainerProps) {
  const [filter, setFilter] = useState<string>(FILTERS.All);
  const [filtered, setFiltered] = useState<Todo[]>(data);

  useEffect(() => {
    switch (filter) {
      case FILTERS.Completed:
        return setFiltered(data.filter((todo) => todo.completed));
      case FILTERS.Incomplete:
        return setFiltered(data.filter((todo) => !todo.completed));
      default:
        return setFiltered(data);
    }
  }, [data, filter, setFiltered]);

  return (
    <>
      <div className="my-4">
        <Input
          name="todo"
          type="text"
          placeholder="Add a new todo"
          onChange={onInput}
          onKeyUp={onKeyUp}
        />
      </div>

      {loading ? (
        <Loading loading={loading} />
      ) : (
        <TodoList items={filtered} onChecked={onStatus} onDelete={onDelete} />
      )}

      <TodoFilters
        current={filter}
        fields={filterFields}
        onClick={(value) => setFilter(value)}
      />
    </>
  );
}

const FILTERS = {
  All: "all",
  Completed: "completed",
  Incomplete: "incomplete",
};

const filterFields = [
  {
    text: "All",
    value: FILTERS.All,
  },
  {
    text: "Completed",
    value: FILTERS.Completed,
  },
  {
    text: "Incomplete",
    value: FILTERS.Incomplete,
  },
];
