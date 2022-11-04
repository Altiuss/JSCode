import React, { useState } from "react";

export default function Counter() {
  let [likes, setLikes] = useState(0);

  const incr = () => {
    setLikes(likes + 1);
    console.log(likes);
  };
  const decr = () => {
    setLikes(likes - 1);
    console.log(likes);
  };

  return (
    <div>
      <p>{likes}</p>
      <button onClick={decr}>-</button>
      <button onClick={incr}>+</button>
    </div>
  );
}
