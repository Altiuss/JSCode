import React from "react";
import Button from "../Button";
import Input from "../Input";
import { useForm } from "react-hook-form";
import s from "./index.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function FormItem({
  title,
  button,
  info_text,
  info_text2,
  form_type,
  link_url,

}) {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    console.log(data);
    reset();
  };

  const emailRegister = register("email");
  const passwordRegister = register("password");

  return (
    <form className={s.form_item} onSubmit={handleSubmit(submit)}>
      {/* <CloseOutlined className={s.cross} /> */}
      <p className={s.form_title}>{title}</p>

      <p className={s.form_descr}>{info_text2}</p>

      <Input type="text" name="email" placeholder="Email" {...emailRegister} />
      {["registration", "login"].includes(form_type) ? (
        <Input
          type="text"
          name="password"
          placeholder="Password"
          {...passwordRegister}
        />
      ) : (
        ""
      )}
      {form_type === "login" ? (
        <Link to="/reset_password">
          <p className={[s.form_descr, s.form_descr_link].join(" ")}>
            {info_text}
          </p>
        </Link>
      ) : (
        <p className={s.form_descr}>{info_text}</p>
      )}

      <Button color="yellow">{button.submit}</Button>

      {["registration", "login"].includes(form_type) ? (
        <Link to={link_url} style={{ textDecoration: "none" }}>
          <Button color="white">{button.redirect}</Button>
        </Link>
      ) : (
        ""
      )}
    </form>
  );
}
