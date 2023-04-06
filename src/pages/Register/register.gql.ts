import { gql } from "@apollo/client";

export const USER_REGISTER = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      id
      name
      email
      token
    }
  }
`;
