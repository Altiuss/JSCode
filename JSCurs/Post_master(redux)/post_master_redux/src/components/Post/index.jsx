import React, { useContext } from "react";
import s from "./index.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../../context";
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import CommentsContainer from '../CommentsContainer'
import AddCommentForm from "../AddCommentForm";

export default function Post({ id, title, text, like, comments }) {
  const { change_like, delete_post } = useContext(Context);

  const like_style = [s.like_btn, like ? s.like_btn_active : ""].join(" ");

  return (
    <div className={s.post_item}>
      <AiOutlineClose className={s.cross} />
      <p>Title: {title}</p>
      <p>Text: {text}</p>
      <p onClick={() => change_like(id)} className={like_style}>
         {(like = like ?  <BsHandThumbsUpFill/> : <BsHandThumbsDownFill/>)}
      </p>
      <CommentsContainer comments={comments} post_id={id}/>
     
    </div>
  );
}
