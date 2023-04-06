import React from "react";
import { useLocation } from "react-router";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import {
  LoginInput,
  useLoginMutation,
  User,
} from "../../graphql/typesAndHooks.generated";
import { Field } from "../../types";
import { Content } from "../../components";
import { FormContainer } from "../../containers";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAuthStore } from "../../store/authStore";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [token, setToken] = useLocalStorage("token", null);
  if (token) return <Navigate to="/" state={{ from: location }} replace />;

  const setUser = useAuthStore((state) => state.setUser);
  const [loginMutation, { error }] = useLoginMutation();

  async function handleLogin(formState: LoginInput) {
    const { email, password } = formState;
    const result = await loginMutation({
      variables: { input: { email, password } },
    }).catch((err) => console.log(err));

    const user = result?.data?.login;

    if (user) {
      setUser(user as User);
      setToken(user.token);
      navigate(from, { replace: true });
    }
  }

  return (
    <Content title="Welcome back!" subTitle="Log in to continue." error={error}>
      <FormContainer
        fields={fields}
        initialState={initialFormState}
        buttonText="Log in"
        onSubmit={handleLogin}
      >
        <NavLink to="/register" className="link-text my-3">
          Don&apos;t have an account? Sign up.
        </NavLink>
      </FormContainer>
    </Content>
  );
}

const initialFormState: LoginInput = {
  email: "",
  password: "",
};

const fields: Field[] = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    className: "my-2",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    className: "my-2",
    required: true,
  },
];
