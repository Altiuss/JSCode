import React from "react";
import s from "./index.module.css";
import { BsTrashFill } from "react-icons/bs";

export default function Comment({id, comment}) {
  return (
    <div className={s.comment_item}>
      Comment:{comment} <BsTrashFill className={s.trash} />
    </div>
  );
}
