import React from "react";
import { Link } from "react";

export default function MainPage() {
  return (
    <div>
      <Link to="/products">
        <button>Products page</button>
      </Link>
      <Link to="/users">
        <button>Users page</button>
      </Link>
    </div>
  );
}
