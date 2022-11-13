import React from "react";
import s from "./index.module.css";

export default function ContactsForm() {
  return (
    <div className={s.root}>
      <div className={s.roof}>
        <div>
          <p>Имя</p>
          <input type="text" placeholder="Иван" />
          <hr />
        </div>
        <div>
          <p>Фамилия</p>
          <input type="text" placeholder="Иванов " />
          <hr />
        </div>
      </div>
      <div className={s.message_div}>
        <p>Сообщение</p>
        <textarea
          name=""
          placeholder="Ваше сообщение"
          id=""
          cols="50"
          rows="5"
        ></textarea>
        <hr />
      </div>
      <button>Отправить сообщение </button>
    </div>
  );
}
