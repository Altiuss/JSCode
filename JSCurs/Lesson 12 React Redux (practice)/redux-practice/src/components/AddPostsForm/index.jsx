import React from "react";
import s from "./index.module.css";
import {addPosts} from '../../store/reducers/postsReducer';
import { useDispatch } from "react-redux";

export default function AddPostsForm() {

const dispatch = useDispatch()


  const submit = (event) => {
    event.preventDefault();
    const { title, description } = event.target;



    dispatch(addPosts({
      title: title.value,
      description: description.value,
    }));

    title.value = "";
    description.value = "";
  };

  return (
    <form onSubmit={submit} className={s.add_posts_form}>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="description" placeholder="Description" />
      <button>Push</button>
    </form>
  );
}
