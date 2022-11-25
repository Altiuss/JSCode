import React, { useContext } from "react";
import s from "./index.module.css";
import { Context } from "../../context";

export default function AddCommentForm({ post_id }) {
  const { add_comment } = useContext(Context);

  const submit = (event) => {
    event.preventDefault();
    const { comment } = event.target;
    add_comment(post_id, comment.value);
    comment.value = "";
  };

  return (
    <form className={s.add_comment_form} onSubmit={submit}>
      <input type="text" name="comment" placeholder="Type your comment" />
      <button>Add comment</button>
    </form>
  );
}
