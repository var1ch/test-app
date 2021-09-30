import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  addCommentAction,
  allCommentsSelector,
  selectedProductSelector,
  setSelectedProductAction,
  CommentType,
  changeProductAction,
} from "../../../state";
import Comment from "./components/Comment";
import EditProductModal from "./components/EditProductModal/EditProductModal";
import { StyledDetailsPage } from "./StyledDetailsPage";

export default function DetailsPage() {
  const comments = useSelector(allCommentsSelector);
  const selectedProduct = useSelector(selectedProductSelector);
  const [openModal, setOpenModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [data, setData] = useState({
    count: "",
    width: "",
    height: "",
    weight: "",
  });
  const browserHistory = useHistory();
  const dispatch = useDispatch();

  const onChangeInModalHandler = (value: string, id: string) => {
    switch (id) {
      case "count":
        setData({
          ...data,
          count: value,
        });
        break;
      case "width":
        setData({
          ...data,
          width: value,
        });
        break;
      case "height":
        setData({
          ...data,
          height: value,
        });
        break;
      case "weight":
        setData({
          ...data,
          weight: value,
        });
        break;
    }
  };

  const onCloseHandler = () => {
    setOpenModal(false);
  };

  const backListener = browserHistory.listen(() => {
    if (browserHistory.action === "POP") {
      dispatch(
        setSelectedProductAction({
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
  return (
    <StyledDetailsPage>
      <div className="header">
        <Link
          className="regularButton backButton"
          to="/"
          onClick={() =>
            dispatch(
              setSelectedProductAction({
                id: selectedProduct?.id ? selectedProduct.id : 0,
                changes: false,
              }),
            )
          }
        >
          Back
        </Link>
        <h1 className="title">Details Page</h1>
      </div>
      <button
        className="regularButton editButton"
        onClick={() => setOpenModal(true)}
      >
        Edit
      </button>
      <br />
      <span className={"productName"}>{selectedProduct?.name}</span>
      <br />
      <img src={selectedProduct?.imageUrl} alt="" />
      <br />
      <span className="description">Count: {selectedProduct?.count}</span>
      <span className="description">
        Sizes: Width: {selectedProduct?.size.width} Height:{" "}
        {selectedProduct?.size.height}
      </span>
      <span className="description">Weight: {selectedProduct?.weight}</span>
      <br />
      <div className="commentsBlock">
        <ul className="commentsList">
          {comments
            .filter((e) => e.productId === selectedProduct?.id)
            .map((item: CommentType) => (
              <Comment key={item.id} id={item.id} text={item.description} />
            ))}
        </ul>
        <div className="addCommentsField">
          <input
            type="text"
            placeholder="Write Your Comment Here"
            value={commentText}
            onChange={onChangeHandler}
          />
          <button
            className="regularButton"
            onClick={() => {
              setCommentText("");
              dispatch(
                addCommentAction({
                  id: Math.random(),
                  productId: selectedProduct?.id ? selectedProduct.id : 0,
                  description: commentText,
                  date: new Date().getTime().toString(),
                }),
              );
            }}
          >
            Add
          </button>
        </div>
      </div>
      <EditProductModal openModal={openModal} onClose={onCloseHandler}>
        <>
          <h2>Edit</h2>
          <form action="">
            <label htmlFor="count">Count: </label>
            <input
              autoComplete="off"
              id="count"
              type="number"
              value={data.count}
              onChange={(e) =>
                onChangeInModalHandler(e.target.value, e.target.id)
              }
            />
            <br />
            <label htmlFor="count">Width: </label>
            <input
              autoComplete="off"
              id="width"
              type="number"
              value={data.width}
              onChange={(e) =>
                onChangeInModalHandler(e.target.value, e.target.id)
              }
            />
            <br />
            <label htmlFor="count">Height: </label>
            <input
              autoComplete="off"
              id="height"
              type="number"
              value={data.height}
              onChange={(e) =>
                onChangeInModalHandler(e.target.value, e.target.id)
              }
            />
            <br />
            <label htmlFor="count">Weight: </label>
            <input
              autoComplete="off"
              id="weight"
              type="number"
              value={data.weight}
              onChange={(e) =>
                onChangeInModalHandler(e.target.value, e.target.id)
              }
            />
            <br />
            <input
              className="submitButton"
              type="button"
              value="Submit"
              onClick={() => {
                if (
                  data.count === "" ||
                  data.height === "" ||
                  data.width === "" ||
                  data.weight === ""
                ) {
                  alert(
                    "You have empty input fields. Please fill them before submit",
                  );
                }
                setOpenModal(false);
                setData({
                  count: "",
                  width: "",
                  height: "",
                  weight: "",
                });
                dispatch(
                  changeProductAction({
                    id: selectedProduct?.id ? selectedProduct?.id : 0,
                    count: `${data.weight ? data.weight : ""}`,
                    width: `${data.width ? data.width : ""}`,
                    height: `${data.height ? data.height : ""}`,
                    weight: `${data.weight ? data.weight : ""}`,
                  }),
                );
              }}
            />
            <input className="cancelButton" type="button" value="Cancel" />
          </form>
        </>
      </EditProductModal>
    </StyledDetailsPage>
  );
}
