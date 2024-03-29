import React from "react";
import { useForm } from "react-hook-form";
import s from "./index.module.css";

export default function FormExamle() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => console.log(data);

  const emailRegister = register("email", {
    required: 'The field "email" is requaired',
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "* not valid email format",
    },
  });
  const passwordRegister = register("password", {
    required: 'The field "password" is requaired',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message:
        "*Password should contain minimum eight characters, at least one letter, one number and one special character",
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          {...emailRegister}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          {...passwordRegister}
        />
        <button>Push</button>
      </form>
      <div className={s.error_messege}>
        {errors.email && <p>{errors.email?.message}</p>}
        {errors.password && <p>{errors.password?.message}</p>}
      </div>
    </div>
  );
}
