import React from "react";
import s from "./index.module.css";
import FormItem from "../FormItem";
import { CloseOutlined } from "@ant-design/icons";
import { Routes, Route } from "react-router-dom";

export default function Modal({ modal, setModal }) {
  return (
    <div className={[s.modal, modal ? s.active : ""].join(" ")}>
      <div className={s.modal_content}>
        <CloseOutlined className={s.cross} onClick={() => setModal(false)} />

        <Routes>
          <Route
            path="/registration_form"
            element={
              <FormItem
                title={"Registration"}
                button={{ submit: "Registration", redirect: "Login" }}
                info_text={
                  "Регистрируясь на сайте,вы соглашаетесь с нашими Правилами и Политикойконфиденциальности и соглашаетесьна информационную рассылку. "
                }
                form_type={"registration"}
                link_url={'/login_form'}
              />
            }
          />

          <Route
            path="/login_form"
            element={
              <FormItem
                title={"Login"}
                button={{ submit: "Login", redirect: "Registration" }}
                info_text={"Resset password"}
                form_type={"login"}
                link_url={'/registration_form'}
              />
            }
          />

          <Route
            path="reset_password"
            element={
              <FormItem
                title={"Reset password"}
                button={{ submit: "Send" }}
                info_text={"Срок действия временного пароля 24 ч."}
                info_text2={
                  "Для получения временного пароля необходимо ввести email, указанный при регистрации."
                }
                form_type={"send"}
                link_url={'/registration_form'}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
