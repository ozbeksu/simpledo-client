import React, {
  KeyboardEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import {
  Todo,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useMarkTodoCompletedMutation,
  useMarkTodoUncompletedMutation,
  useQueryQuery,
} from "../../graphql/typesAndHooks.generated";
import { LIST_TODO } from "./todos.gql";
import { Content } from "../../components";
import { TodosContainer } from "../../containers";

const ACTION_KEY = "Enter";

export default function Todos() {
  const { data, loading, error } = useQueryQuery();

  const [_, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const [createTodoMutation] = useCreateTodoMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const [markTodoCompletedMutation] = useMarkTodoCompletedMutation();
  const [markTodoUncompletedMutation] = useMarkTodoUncompletedMutation();

  useEffect(() => {
    if (!data || !data.listTodos) return;

    setTodos(data.listTodos as Todo[]);
  }, [data, setTodos]);

  async function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== ACTION_KEY) return;

    const target = event.target as HTMLInputElement;
    const options = {
      variables: { input: { title: target.value } },
      refetchQueries: [LIST_TODO],
    };
    console.log(options);
    target.value = "";
    await createTodoMutation(options).catch((err) => console.log(err));
  }

  async function handleDelete(id: string) {
    if (!id) return;

    const options = {
      variables: { input: { id } },
      refetchQueries: [LIST_TODO],
    };

    await deleteTodoMutation(options).catch((err) => console.log(err));
  }

  async function handleStatus(id: string, state: boolean) {
    if (!id) return;

    const options = {
      variables: { input: { id } },
      refetchQueries: [LIST_TODO],
    };

    state
      ? await markTodoCompletedMutation(options).catch((err) =>
          console.log(err)
        )
      : await markTodoUncompletedMutation(options).catch((err) =>
          console.log(err)
        );
  }

  return (
    <Content title="Todo List" error={error}>
      <TodosContainer
        data={todos}
        loading={loading}
        onInput={(e) => setTitle(e.target.value)}
        onKeyUp={handleKeyPress}
        onStatus={handleStatus}
        onDelete={handleDelete}
      />
    </Content>
  );
}
