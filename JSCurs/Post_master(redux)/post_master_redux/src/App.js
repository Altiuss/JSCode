import PostsContainer from "./components/PostsContainer";
import { useState } from "react";
import { posts_data } from "./components/data/post";
import { Context } from "./context";
import AddPostForm from "./components/AddPostForm";

function App() {
  const [posts, setPosts] = useState(posts_data);

  const change_like = (id) => {
    const target_card = posts.find((el) => el.id === id);
    target_card.like = !target_card.like;
    setPosts([...posts]);
  };

  const add_post = (title, text) => {
    setPosts([
      ...posts,
      { id: Date.now(), title: title, text: text, like: false, comments: [] },
    ]);
  };

  const add_comment = (post_id, comment_text) => {
    const comment = {
      id: Date.now(),
      comment: comment_text,
    };

    const target_post = posts.find((el) => el.id === post_id);
    target_post.comments.push(comment);
    setPosts([...posts])
  };

  return (
    <div>
      <Context.Provider value={{ posts, change_like, add_post, add_comment }}>
        <AddPostForm />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
