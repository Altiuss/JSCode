import React from "react";
import s from "./index.module.css";
import { useForm } from "react-hook-form";

export default function ContactForm1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const submit = (data) => console.log(data);

  const firstnameRegister = register("firstname", {
    required: "firstname is requaired",
  });
  const lastnameRegister = register("lastname", {
    required: "lastname is requaired",
  });
  const mesageRegister = register("mesage", {
    required: "Messege is requaired",
  });

  return (
    <form className={s.contacts_form} onSubmit={handleSubmit(submit)}>
      <div className={s.firstname_and_lastname}>
        <label>
          <p>
            Имя
            {errors.firstname && (
              <p className={s.err1}>{errors.firstname?.message}</p>
            )}
          </p>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your name:"
            {...firstnameRegister}
          />
        </label>
        <label>
          <p>
            {" "}
            Фамилия
            {errors.lastname && (
              <p className={s.err2}>{errors.lastname?.message}</p>
            )}
          </p>
          <input
            type="text"
            name="lastname"
            placeholder="Enter your lastname:"
            {...lastnameRegister}
          />
        </label>
      </div>

      <label>
        <p>
          Сообщение
          {errors.mesage && <p className={s.err3}>{errors.mesage?.message}</p>}
        </p>
        <textarea
          name="mesage"
          id=""
          cols="30"
          rows="10"
          placeholder="Write your messege"
          {...mesageRegister}
        ></textarea>
      </label>
      <button>Отправить сообщение</button>
    </form>
  );
}
