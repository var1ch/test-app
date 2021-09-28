import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteProductAction } from "../../../state";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../../../state";

const StyledProductItem = styled.li`
  margin-top: 25px;
  background-color: white;
  border-radius: 3px;
  padding: 1em;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.25);
  span.productName {
    font-weight: bold;
  }
  img {
    float: left;
    margin-right: 16px;
    width: 150px;
  }
  &:last-child {
    margin-bottom: 25px;
  }
`;

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

  return (
    <StyledProductItem className="productItem">
      <div className="product">
        <img src={imgUrl} alt="product" />
        <span className="productName">{productName}</span>
        <br />
        <p className="productDescription">{productDescription}</p>
        <span className="productCount">{productCount}</span>
      </div>
      <Link
        to={`/products/${id}`}
        onClick={() => dispatch(setSelectedProduct({ id, changes: true }))}
      >
        Product Details
      </Link>
      <button>Edit</button>
      <button onClick={() => dispatch(deleteProductAction(id))}>Delete</button>
    </StyledProductItem>
  );
}
