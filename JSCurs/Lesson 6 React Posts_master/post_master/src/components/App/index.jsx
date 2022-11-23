import PostContainer from "../PostContainer";
import { useState } from "react";
import { posts_data } from "../../data/posts";
import { Context } from "../../context";

export default function App() {
  const [posts, setPosts] = useState(posts_data);

  return (
    <Context.Provider value={{ posts }}>
      <PostContainer />
    </Context.Provider>
  );
}
