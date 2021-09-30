import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../../../../state";
import { Link } from "react-router-dom";
import { setSelectedProductAction } from "../../../../../state";
import ModalItem from "./ModalItem";

interface Props {
  id: number;
  imgUrl: string;
  productName: string;
  productDescription: string;
  productCount: string;
}

export default function ProductItem({
  id,
  imgUrl,
  productName,
  productDescription,
  productCount,
}: Props) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    setOpenModal(false);
  };

  const onConfirmHandler = () => {
    dispatch(deleteProductAction(id));
    setOpenModal(false);
  };

  return (
    <li className="listItem">
      <div className="product">
        <img src={imgUrl} alt="product" />
        <span className="productName">{productName}</span>
        <br />
        <p className="productDescription">{productDescription}</p>
        <span className="productCount">{productCount}</span>
      </div>
      <div className={"buttonsBlock"}>
        <Link
          className="regularButton productButton"
          to={`/products/${id}`}
          onClick={() =>
            dispatch(setSelectedProductAction({ id, changes: true }))
          }
        >
          Product Details
        </Link>
        {/* <button>Edit</button> */}
        <button
          className="regularButton productButton"
          onClick={() => setOpenModal(true)}
        >
          Delete
        </button>
      </div>
      <ModalItem onClose={onCloseHandler} openModal={openModal}>
        <>
          <span className="modalTitle">Delete Product?</span> <br />
          <button className="modalButton" onClick={onConfirmHandler}>
            Delete
          </button>
          <button className="modalButton" onClick={onCloseHandler}>
            Cancel
          </button>
        </>
      </ModalItem>
    </li>
  );
}
