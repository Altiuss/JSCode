import React, { useContext } from "react";
import { Context } from "../../context";
import s from "./index.module.css";
import { addToDos } from "../../requests/todos";

export default function AddToDoForm() {
  const { createNewToDos } = useContext(Context);

  const submit = (event) => {
    event.preventDefault();
    const { todo } = event.target;
    addToDos(
      {
        todo: todo.value,
        completed: false,
        userId: 26,
      },
      createNewToDos
    );

    todo.value = "";
  };

  return (
    <form onSubmit={submit} className={s.add_todo_form}>
      <input type="text" name="todo" placeholder="Task" />
      <button>Push</button>
    </form>
  );
}
