import React from "react";
import Button from "../Button";
import Input from "../Input";
import { useForm } from "react-hook-form";
import s from "./index.module.css";
import {CloseOutlined} from '@ant-design/icons'

export default function FormItem() {
  const { register, handleSubmit } = useForm();

  const submit = (data) => console.log(data);

  const emailRegister = register("email");
  const passwordRegister = register("password");

  return (
    <form className={s.form_item} onSubmit={handleSubmit(submit)}>
    <CloseOutlined  className={s.cross}/>
      <p className={s.form_title}>Registration</p>
      <Input type="text" name="email" placeholder="Email" {...emailRegister} />
      <Input
        type="text"
        name="password"
        placeholder="Password"
        {...passwordRegister}
      />
      <p className={s.form_descr}>
        By registering on the site, you agree to our Rules and Privacy Policy
        and agree to receive newsletters
      </p>
      <Button color="yellow">Registration</Button>
      <Button color="white">Login</Button>
      {/* <Button color="black">Login</Button>
      <Button color="blue">Login</Button>
      <Button color="pink">Login</Button> */}
    </form>
  );
}
