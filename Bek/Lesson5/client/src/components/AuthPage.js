import React from "react";
import { login_req} from "../requests/login_req";
import { register_req } from "../requests/register_req";

export default function AuthPage() {
  const login_submit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    login_req({ email: email.value, password: password.value });
    e.target.reset();
  };

  const register_submit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    register_req({ email: email.value, password: password.value });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={login_submit}>
        <p>Login</p>
        <input type="text" placeholder="email" name="email" autoComplete="username"/>
        <input type="password" placeholder="password" name="password" autoComplete="current-password" />
        <button>Login</button>
      </form>
      <br />
      <form onSubmit={register_submit}>
        <p>Register</p>
        <input type="text" placeholder="email" name="email" autoComplete="username"/>
        <input type="password" placeholder="password" name="password" autoComplete="current-password"/>
        <button>Register</button>
      </form>
    </div>
  );
}
