import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../../state";
import { StyledProductItem } from "./StyledProductItem";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../../../state";
import ModalItem from "../../components/ModalItem";

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
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const onCloseHandler = () => {
    setOpenModal(false);
  };
  const onConfirmHandler = () => {
    setOpenModal(false);
    dispatch(deleteProductAction(id));
  };

  return (
    <StyledProductItem className="productItem">
      <div className="product">
        <img src={imgUrl} alt="product" />
        <span className="productName">{productName}</span>
        <br />
        <p className="productDescription">{productDescription}</p>
        <span className="productCount">{productCount}</span>
      </div>
      <div className={"buttonsBlock"}>
        <Link
          to={`/products/${id}`}
          onClick={() => dispatch(setSelectedProduct({ id, changes: true }))}
        >
          Product Details
        </Link>
        {/* <button>Edit</button> */}
        <button onClick={() => setOpenModal(true)}>Delete</button>
      </div>
      <ModalItem
        text="lorem ipsum"
        title="loram ipsum"
        confirmButtonTitle="Confirm"
        closeButtonTitle="Cancel"
        openModal={openModal}
        onClose={onCloseHandler}
        onConfirm={onConfirmHandler}
      />
    </StyledProductItem>
  );
}
