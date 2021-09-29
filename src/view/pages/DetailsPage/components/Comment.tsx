import React from "react";
import { useDispatch } from "react-redux";
import { deleteCommentAction } from "../../../../state";

interface Props {
  text: string;
  id: number;
}

export default function Comment({ text, id }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="comment">
      <span>{text}</span>
      <button onClick={() => dispatch(deleteCommentAction(id))}>delete</button>
    </div>
  );
}
