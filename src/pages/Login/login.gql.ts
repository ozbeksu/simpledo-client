import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      id
      name
      email
      token
    }
  }
`;
