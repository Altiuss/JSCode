import React from "react";
import s from "./index.module.css";

export default function ToDoItem({ completed, todo }) {
  const todo_style = {
    border: completed ? "2px dashed green" : "2px dashed red",
  };

  return (
    <div className={s.todoitem_style} style={todo_style}>
      <p>Task: {todo}</p>
      <p> Status: {completed ? "Done" : "Not done"}</p>
    </div>
  );
}
