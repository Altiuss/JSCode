import PostContainer from "../PostContainer";
import { useState } from "react";
import { posts_data } from "../../data/posts";
import { Context } from "../../context";
import AddPostForm from "../AddPostForm";
import { useEffect } from "react";

export default function App() {
  const [posts, setPosts] = useState(posts_data);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("posts"));
    if (res) setPosts(res);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

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

  const delete_post = (post_id) =>
    setPosts(posts.filter((el) => el.id !== post_id));

  const delete_comment = (post_id, comment_id) => {
    const target_post = posts.find((el) => el.id === post_id);
    target_post.comments = target_post.comments.filter(
      (el) => el.id !== comment_id
    );
    setPosts([...posts]);
  };

  // const delete_comment = (post_id, comment_id) => {
  //   setPosts(prev_state => {
  //     const target_post = prev_state.find(el => el.id === post_id);
  //     target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
  //     return [...prev_state]
  //   })
  // }

  return (
    <Context.Provider
      value={{
        posts,
        change_like,
        add_post,
        add_comment,
        delete_post,
        delete_comment,
      }}
    >
      <AddPostForm />
      <PostContainer />
    </Context.Provider>
  );
}
