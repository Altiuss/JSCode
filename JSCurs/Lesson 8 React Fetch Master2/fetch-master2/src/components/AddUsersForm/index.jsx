import React, { useContext } from "react";
import { addUsers } from "../../requests/users";
import { Context } from "../../context";
import s from "./index.module.css";

export default function AddUsersForm() {
  const { createNewUsers } = useContext(Context);

  const submit = (event) => {
    event.preventDefault();
    const { name, role, avatar } = event.target;
    addUsers(
      {
        name: name.value,
        role: role.value,
        avatar: avatar.value,
        email: "nico@gmail.com",
        password: '123',
      },
      createNewUsers
    );

    name.value = "";
    role.value = "";
    avatar.value = "";
  };

  return (
    <form onSubmit={submit} className={s.add_users_form}>
      <input type="text" name="name" placeholder="Name:" />
      <input type="text" name="role" placeholder="Role:" />
      <input type="text" name="avatar" placeholder="Avatar:" />
      <button>Push</button>
    </form>
  );
}
