import React from "react";
import { forwardRef } from "react";
import s from "./index.module.css";

const Input = forwardRef((props, ref) => {
  return <input className={s.input_style} {...props} ref={ref} />;
});
export default Input;

// import React from "react";

// export const Input = (props) => {
//   return <input {...props} />;
// };
