import React, { Children } from "react";
import s from "./index.module.css";

export default function Button({ children, color }) {
  console.log(s);
  return <button className={[s.btn, s[color]].join(" ")}>{children}</button>;
}
