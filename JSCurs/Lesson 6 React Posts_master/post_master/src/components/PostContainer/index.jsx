import React, { useContext } from "react";
import { Context } from "../../context";
import Post from "../Post";

export default function PostContainer() {
  const { posts } = useContext(Context);

  return (
    <div>
      {posts.map((el) => (
        <Post key={el.id} {...el} />
      ))}
    </div>
  );
}
