import React from "react";
import { register_req } from "../requests/register_req";
import { login_req } from "../requests/login_req";

export default function AuthPage() {




  const login_submit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log(email.value, password.value);
    login_req({
      email: email.value,
      password: password.value,
    });
    email.value = "";
    password.value = "";
  };

  const register_submit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log(email.value, password.value);
    register_req({
      email: email.value,
      password: password.value,
    });
    email.value = "";
    password.value = "";
  };

  return (
    <div>
      <form onSubmit={login_submit}>
        <p>Login</p>
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
      <br />
      <br />
      <br />
      <form onSubmit={register_submit}>
        <p>Register</p>
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
      AuthPage
    </div>
  );
}
