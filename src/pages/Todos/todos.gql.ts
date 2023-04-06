import { gql } from "@apollo/client";

export const LIST_TODO = gql`
  query Query {
    listTodos {
      id
      title
      completed
    }
  }
`;

export const CREATE_TODO = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($input: TodoInput!) {
    deleteTodo(input: $input)
  }
`;
export const MARK_TODO_COMPLETE = gql`
  mutation MarkTodoCompleted($input: TodoInput!) {
    markTodoCompleted(input: $input) {
      id
    }
  }
`;

export const MARK_TODO_INCOMPLETE = gql`
  mutation MarkTodoUncompleted($input: TodoInput!) {
    markTodoUncompleted(input: $input) {
      id
    }
  }
`;
