import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/products" style={{ textDecoration: "none", color: "red", padding: " 0 50px 50px 50px" }}>
        Products
      </Link>
      <Link to="/auth" style={{ textDecoration: "none", color: "red", padding: " 0 50px 50px 50px" }}>Auth</Link>
    </div>
  );
}
