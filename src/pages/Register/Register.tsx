import React from "react";
import { useLocation } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import {
  SignUpInput,
  User,
  useSignUpMutation,
} from "../../graphql/typesAndHooks.generated";
import { Field } from "../../types";
import { Content } from "../../components";
import { FormContainer } from "../../containers";
import { useAuthStore } from "../../store/authStore";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [_, setToken] = useLocalStorage("token", null);
  const setUser = useAuthStore((state) => state.setUser);
  const [signUpMutation, { error }] = useSignUpMutation();

  async function handleRegister(formState: SignUpInput) {
    const { name, email, password } = formState;

    const result = await signUpMutation({
      variables: { input: { name, email, password } },
    }).catch((err) => console.log(err));

    const user = result?.data?.signUp;
    if (user) {
      setUser(user as User);
      setToken(user.token);
      navigate(from, { replace: true });
    }
  }

  return (
    <Content
      title="Welcome!"
      subTitle="Sign up to start using Simpledo today."
      error={error}
    >
      <FormContainer
        fields={fields}
        initialState={initialState}
        buttonText="Sign Up"
        onSubmit={handleRegister}
      >
        <NavLink to="/login" className="link-text my-3">
          Do have an account? Sign in.
        </NavLink>
      </FormContainer>
    </Content>
  );
}

const initialState: SignUpInput = {
  name: "",
  email: "",
  password: "",
};

const fields: Field[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Full Name",
    className: "my-2",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    className: "my-2",
    required: true,
    min: 6,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    className: "my-2",
    required: true,
    min: 6,
  },
];
