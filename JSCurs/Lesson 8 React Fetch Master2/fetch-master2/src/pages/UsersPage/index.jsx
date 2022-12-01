import React from "react";
import { Link } from "react-router-dom";

export default function UsersPage() {
  return (
    <div>
      <Link to="/">
        <button>Main</button>
      </Link>
      Users page
    </div>
  );
}
