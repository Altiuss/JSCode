import React from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../User";
import s from "./index.module.css";
import { deleteUser } from "../../store/reducers/userReducer";

export default function UsersContainer() {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const delete_user = (id) => dispatch(deleteUser(id));

  return (
    <div className={s.users_container_style}>
      {state.map((el) => (
        <User key={el.id} {...el} delete_user={delete_user} />
      ))}
    </div>
  );
}
