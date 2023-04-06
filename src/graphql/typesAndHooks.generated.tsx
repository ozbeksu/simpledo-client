import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTodoInput = {
  title: Scalars["String"];
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTodo: Todo;
  deleteTodo: Scalars["Boolean"];
  login?: Maybe<User>;
  markTodoCompleted: Todo;
  markTodoUncompleted: Todo;
  signUp?: Maybe<User>;
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationDeleteTodoArgs = {
  input: TodoInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationMarkTodoCompletedArgs = {
  input: TodoInput;
};

export type MutationMarkTodoUncompletedArgs = {
  input: TodoInput;
};

export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type Query = {
  __typename?: "Query";
  listTodos: Array<Todo>;
};

export type SignUpInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type Todo = {
  __typename?: "Todo";
  completed: Scalars["Boolean"];
  id: Scalars["ID"];
  title: Scalars["String"];
};

export type TodoInput = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  todos: Array<Todo>;
  token?: Maybe<Scalars["String"]>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login?: {
    __typename?: "User";
    id: string;
    name: string;
    email: string;
    token?: string | null;
  } | null;
};

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  signUp?: {
    __typename?: "User";
    id: string;
    name: string;
    email: string;
    token?: string | null;
  } | null;
};

export type QueryQueryVariables = Exact<{ [key: string]: never }>;

export type QueryQuery = {
  __typename?: "Query";
  listTodos: Array<{
    __typename?: "Todo";
    id: string;
    title: string;
    completed: boolean;
  }>;
};

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;

export type CreateTodoMutation = {
  __typename?: "Mutation";
  createTodo: { __typename?: "Todo"; id: string };
};

export type DeleteTodoMutationVariables = Exact<{
  input: TodoInput;
}>;

export type DeleteTodoMutation = {
  __typename?: "Mutation";
  deleteTodo: boolean;
};

export type MarkTodoCompletedMutationVariables = Exact<{
  input: TodoInput;
}>;

export type MarkTodoCompletedMutation = {
  __typename?: "Mutation";
  markTodoCompleted: { __typename?: "Todo"; id: string };
};

export type MarkTodoUncompletedMutationVariables = Exact<{
  input: TodoInput;
}>;

export type MarkTodoUncompletedMutation = {
  __typename?: "Mutation";
  markTodoUncompleted: { __typename?: "Todo"; id: string };
};

export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      id
      name
      email
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}

export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      id
      name
      email
      token
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options
  );
}

export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const QueryDocument = gql`
  query Query {
    listTodos {
      id
      title
      completed
    }
  }
`;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<QueryQuery, QueryQueryVariables>(
    QueryDocument,
    options
  );
}

export function useQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(
    QueryDocument,
    options
  );
}

export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QueryQueryResult = Apollo.QueryResult<
  QueryQuery,
  QueryQueryVariables
>;
export const CreateTodoDocument = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
    }
  }
`;
export type CreateTodoMutationFn = Apollo.MutationFunction<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(
    CreateTodoDocument,
    options
  );
}

export type CreateTodoMutationHookResult = ReturnType<
  typeof useCreateTodoMutation
>;
export type CreateTodoMutationResult =
  Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;
export const DeleteTodoDocument = gql`
  mutation DeleteTodo($input: TodoInput!) {
    deleteTodo(input: $input)
  }
`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument,
    options
  );
}

export type DeleteTodoMutationHookResult = ReturnType<
  typeof useDeleteTodoMutation
>;
export type DeleteTodoMutationResult =
  Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;
export const MarkTodoCompletedDocument = gql`
  mutation MarkTodoCompleted($input: TodoInput!) {
    markTodoCompleted(input: $input) {
      id
    }
  }
`;
export type MarkTodoCompletedMutationFn = Apollo.MutationFunction<
  MarkTodoCompletedMutation,
  MarkTodoCompletedMutationVariables
>;

/**
 * __useMarkTodoCompletedMutation__
 *
 * To run a mutation, you first call `useMarkTodoCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkTodoCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markTodoCompletedMutation, { data, loading, error }] = useMarkTodoCompletedMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMarkTodoCompletedMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkTodoCompletedMutation,
    MarkTodoCompletedMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MarkTodoCompletedMutation,
    MarkTodoCompletedMutationVariables
  >(MarkTodoCompletedDocument, options);
}

export type MarkTodoCompletedMutationHookResult = ReturnType<
  typeof useMarkTodoCompletedMutation
>;
export type MarkTodoCompletedMutationResult =
  Apollo.MutationResult<MarkTodoCompletedMutation>;
export type MarkTodoCompletedMutationOptions = Apollo.BaseMutationOptions<
  MarkTodoCompletedMutation,
  MarkTodoCompletedMutationVariables
>;
export const MarkTodoUncompletedDocument = gql`
  mutation MarkTodoUncompleted($input: TodoInput!) {
    markTodoUncompleted(input: $input) {
      id
    }
  }
`;
export type MarkTodoUncompletedMutationFn = Apollo.MutationFunction<
  MarkTodoUncompletedMutation,
  MarkTodoUncompletedMutationVariables
>;

/**
 * __useMarkTodoUncompletedMutation__
 *
 * To run a mutation, you first call `useMarkTodoUncompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkTodoUncompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markTodoUncompletedMutation, { data, loading, error }] = useMarkTodoUncompletedMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMarkTodoUncompletedMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkTodoUncompletedMutation,
    MarkTodoUncompletedMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MarkTodoUncompletedMutation,
    MarkTodoUncompletedMutationVariables
  >(MarkTodoUncompletedDocument, options);
}

export type MarkTodoUncompletedMutationHookResult = ReturnType<
  typeof useMarkTodoUncompletedMutation
>;
export type MarkTodoUncompletedMutationResult =
  Apollo.MutationResult<MarkTodoUncompletedMutation>;
export type MarkTodoUncompletedMutationOptions = Apollo.BaseMutationOptions<
  MarkTodoUncompletedMutation,
  MarkTodoUncompletedMutationVariables
>;
