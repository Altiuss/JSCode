import React from "react";
import s from "./index.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import CommentsContainer from '../CommentsContainer'
import AddCommentForm from "../AddCommentForm";
import { useDispatch } from "react-redux";
import { changeLike } from "../../store/reducers/postReducer";

export default function Post({like,title, text,id, comments}) {

  const dispatch = useDispatch();
  const change_like = id => dispatch(changeLike(id))

  const like_style = [s.like_btn, like ? s.like_btn_active : ""].join(" ");

  return (
    <div className={s.post_item}>
      <AiOutlineClose className={s.cross} />
      <p>Title: {title}</p>
      <p>Text: {text}</p>
      <p onClick={() => change_like(id)}
       className={like_style} >
         {(like = like ?  <BsHandThumbsUpFill/> : <BsHandThumbsDownFill/>)}
      </p>
      <CommentsContainer comments={comments}/>
     
    </div>
  );
}
