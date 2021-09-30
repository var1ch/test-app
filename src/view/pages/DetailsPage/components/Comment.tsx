import React from "react";
import { useDispatch } from "react-redux";
import { deleteCommentAction } from "../../../../state";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  text: string;
  id: number;
}

export default function Comment({ text, id }: Props) {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="comment">
        <span className="commentText">{text}</span>
        <AiFillDelete
          className="deleteButton"
          size={35}
          onClick={() => dispatch(deleteCommentAction(id))}
        />
      </div>
    </li>
  );
}
