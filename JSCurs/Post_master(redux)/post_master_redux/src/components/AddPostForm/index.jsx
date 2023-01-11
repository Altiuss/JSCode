import React from "react";
import s from "./index.module.css";
import { addPost } from "../../store/reducers/postReducer";
import { useDispatch } from "react-redux";

export default function AddPostForm() {
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    const [title, text] = event.target;
    dispatch(
      addPost({
        title: title.value,
        text: text.value,
        like: false,
        comments: []
      })
    );
    title.value = "";
    text.value = "";
  };

  return (
    <form className={s.add_post_form} onSubmit={submit}>
      <input type="text" name="title" placeholder="Your title:" />
      <input type="text" name="text" placeholder="Your tex:" />
      <button>Add post</button>
    </form>
  );
}
