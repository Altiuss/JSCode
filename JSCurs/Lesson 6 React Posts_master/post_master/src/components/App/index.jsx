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
  };

  const add_post = (title, text) =>
    setPosts([
      ...posts,
      {
        id: Date.now(),
        title, //title: title
        text, //text: text
        like: false,
        comments: [],
      },
    ]);

  const add_comment = (post_id, text) => {
    const comment = {
      id: Date.now(),
      comment: text,
    };
    const target_post = posts.find((el) => el.id === post_id);
    target_post.comments.push(comment);
    setPosts([...posts]);
  };

  return (
    <Context.Provider value={{ posts, change_like, add_post, add_comment }}>
      <AddPostForm />
      <PostContainer />
    </Context.Provider>
  );
}
