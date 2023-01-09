import React, {useContext} from "react";
import { Context } from "../../context";

export default function AddCommentForm({post_id}) {
const {add_comment} = useContext(Context)

  const submit = (event) => {
    event.preventDefault();
    const { comment } = event.target;
    add_comment(post_id, comment.value);
    comment.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="comment" placeholder="Write comment:" />
      <button>Add comment</button>
    </form>
  );
}
