import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProductSelector } from "../../../state";
import { Link, useHistory } from "react-router-dom";
import { setSelectedProduct } from "../../../state";
import styled from "styled-components";
import { addCommentAction, allCommentsSelector } from "../../../state";
import Comment from "./components/Comment";

const StyledDetailsPage = styled.div`
  img {
    width: 380px;
  }
  .productName {
    font-weight: bold;
  }
`;

export default function DetailsPage() {
  const comments = useSelector(allCommentsSelector);
  const [commentText, setCommentText] = useState("");
  const browserHistory = useHistory();
  const backListener = browserHistory.listen((loc) => {
    if (browserHistory.action === "POP") {
      dispatch(
        setSelectedProduct({
          id: selectedProduct?.id ? selectedProduct.id : 0,
          changes: false,
        }),
      );
    }
  });
  const onChangeHandler = (e: any) => {
    setCommentText(e.target.value);
  };
  useEffect(() => {
    return backListener();
  });
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectedProductSelector);
  return (
    <StyledDetailsPage>
      <Link
        to="/"
        onClick={() =>
          dispatch(
            setSelectedProduct({
              id: selectedProduct?.id ? selectedProduct.id : 0,
              changes: false,
            }),
          )
        }
      >
        Back
      </Link>
      <h1>Details Page</h1>
      <button>Edit Modal</button>
      <span className={"productName"}>{selectedProduct?.name}</span>
      <br />
      <img src={selectedProduct?.imageUrl} alt="" />
      <br />
      <p>{`
        Count: ${selectedProduct?.count}
        Sizes: Width: ${selectedProduct?.size.width} Height: ${selectedProduct?.size.height}
        Weight: ${selectedProduct?.weight}`}</p>
      <br />
      {comments.map((item) => (
        <Comment key={item.id} id={item.id} text={item.description} />
      ))}
      <input
        type="text"
        placeholder="Write Your Comment Here"
        value={commentText}
        onChange={onChangeHandler}
      />
      <button
        onClick={() => {
          dispatch(
            addCommentAction({
              id: Math.random(),
              productId: 1,
              description: commentText,
              date: new Date().getTime().toString(),
            }),
          );
        }}
      >
        Add Comment
      </button>
    </StyledDetailsPage>
  );
}
