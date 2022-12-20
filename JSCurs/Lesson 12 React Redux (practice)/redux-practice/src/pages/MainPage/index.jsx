import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Link to="/posts">
        <button>To Posts page</button>
      </Link>

      <Link to="/users">
        <button>To Users page</button>
      </Link>
    </div>
  );
}
