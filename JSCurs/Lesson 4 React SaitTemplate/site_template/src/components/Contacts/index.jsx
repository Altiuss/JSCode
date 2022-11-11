import React from "react";
import ContactsForm from "../ContactsForm";
import s from "./index.module.css";

export default function Contacts() {
  return (
    <section className={s.contacts_section}>
      <div className={["wrapper", s.contacts_block].join(" ")}>
        <div className={s.contacts_info}>
          <h2>Связь с нами</h2>
          <p>
            У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
          </p>
          <div className={s.phone_and_mail}>
            <p>+7 (111) 222-33-44</p>
            <p>order@bu-one.ru</p>
          </div>
        </div>
        <ContactsForm />
      </div>
    </section>
  );
}