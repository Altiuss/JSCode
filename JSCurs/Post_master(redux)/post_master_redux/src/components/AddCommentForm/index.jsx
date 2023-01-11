import React from "react";
import { addComment } from "../../store/reducers/postReducer";
import { useDispatch } from "react-redux";

export default function AddCommentForm({post_id}) {

const dispatch = useDispatch()

  const submit = (event) => {
    event.preventDefault();
    const { comment } = event.target;
    dispatch(addComment({
      post_id,
      comment: comment.value
    }));

    comment.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="comment" placeholder="Write comment:" />
      <button>Add comment</button>
    </form>
  );
}
