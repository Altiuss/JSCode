import React from "react";
import {
  BsExclamationOctagonFill,
  BsStopwatchFill,
  BsTools,
} from "react-icons/bs";
import s from "./index.module.css";

export default function Footer() {
  return (
    <div className={s.footer}>
      <BsExclamationOctagonFill id={s.octagon}/>
      <BsStopwatchFill  id={s.stop}/>
      <BsTools id={s.tools}/>
    </div>
  );
}