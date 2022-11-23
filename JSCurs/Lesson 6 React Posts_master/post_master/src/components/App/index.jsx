import PostContainer from "../PostContainer";
import { useState } from "react";
import { posts_data } from "../../data/posts";
import { Context } from "../../context";
import AddPostForm from "../AddPostForm";

export default function App() {
  const [posts, setPosts] = useState(posts_data);

  const change_like = (id) => {
    const target_card = posts.find((el) => el.id === id);
    target_card.like = !target_card.like;

    setPosts([...posts]);
  }

  const add_post = {title_value, text_value} => {

  }

  return (
    <Context.Provider value={{ posts, change_like }}>
      <AddPostForm />
      <PostContainer />
    </Context.Provider>
  );
}
