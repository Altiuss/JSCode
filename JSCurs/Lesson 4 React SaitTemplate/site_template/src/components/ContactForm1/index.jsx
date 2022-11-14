import React from "react";
import s from "./index.module.css";

export default function ContactForm1() {
  return (
    <form className={s.contacts_form}>
      <div className={s.firstname_and_lastname}>
        <label>
          <p>Имя</p>
          <input type="text" name="firstname" placeholder="Иван" />
        </label>
        <label>
          <p>Фамилия</p>
          <input type="text" name="lastname" placeholder="Иванов " />
        </label>
      </div>

      <label>
        <p>Сообщение</p>
        <textarea
          name="mesage"
          id=""
          cols="30"
          rows="10"
          placeholder="Ваше сообщение"
        ></textarea>
      </label>
      <button>Отправить сообщение</button>
    </form>
  );
}
